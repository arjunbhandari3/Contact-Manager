const Contact = require("../models/contact");

const getMyContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id });
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

const createContact = async (req, res) => {
  try {
    const contact = await Contact.findOne({ phone: req.body.phone });
    if (contact) {
      return res.status(400).json({
        success: false,
        message: "Phone number already exists.",
      });
    }
    const newContact = await Contact.create(req.body);
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

module.exports = { getMyContacts, createContact };
