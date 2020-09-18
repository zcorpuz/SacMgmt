const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.emitWarning.MONGODB_URI ||
    "mongodb://localhost/contactList"
);

const contactSeed = [
    {
        name: "Zach Corpuz",
        email: "zach@fakeemail.com"
    },
    {
        name: "Maira Garcia",
        email: "maira@fakeemail.com",
        message: "Test123"
    },
    {
        name: "CJ Pia",
        email: "cj@fakeemail.com",
        message: "Test123"
    },
    {
        name: "Carolina Aldana",
        email: "carolina@fakeemail.com",
        message: "Test123"
    }
]