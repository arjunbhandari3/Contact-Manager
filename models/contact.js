const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    favourite: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "personal",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contact", ContactSchema);
