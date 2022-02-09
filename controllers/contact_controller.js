const Contact = require("../models/contact");

const getMyContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    console.log(contacts);
    return res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }
    if (contact && contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });
    }
    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = await Contact.findOne({ phone: req.body.phone });
    if (contact) {
      return res.status(400).json({
        success: false,
        message: "Phone number already exists.",
      });
    }
    const newContact = await Contact.create({ ...req.body, user: req.user.id });
    return res.status(201).json({
      success: true,
      data: newContact,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }
    if (contact && contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });
    }
    const isDuplicate = await Contact.findOne({ phone: phone });
    if (isDuplicate) {
      return res.status(400).json({
        success: false,
        message: "Phone number already exists.",
      });
    }

    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (image) contactFields.image = image;
    if (address) contactFields.address = address;
    if (faourite) contactFields.faourite = favourite;
    if (type) contactFields.type = type;

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: updatedContact,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }
    if (contact && contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });
    }
    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getMyContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
