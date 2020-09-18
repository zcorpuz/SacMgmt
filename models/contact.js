const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true
  },
  message: { 
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
