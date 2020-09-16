const express = require("express");
const bodyParser = require('body-parser');

const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

const routes = require('./routes/API');

const PORT = process.env.PORT || 3001;

if (app.get('env') === 'development') { require('dotenv').config(); }

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', (req, res) => {res.send('Hello World!')});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/contactList",
    { 
      useNewUrlParser: true,  
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  .catch(e => {
    console.error('Connection error', e.message)
  })

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
