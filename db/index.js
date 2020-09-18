const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/contactList',
  { 
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
.catch(e => {
  console.error('Connection error', e.message)
})

const db = mongoose.connection;

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

module.exports = db;