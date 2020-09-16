const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: [{type: mongoose.SchemaTypes.Email, required: true}],
  message: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
