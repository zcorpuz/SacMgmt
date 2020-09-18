const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db/index');
const contactRouter = require('./routes/API');

const app = express();

const PORT = process.env.PORT || 3000;

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

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Add routes, both API and view
app.use('/api', contactRouter);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
