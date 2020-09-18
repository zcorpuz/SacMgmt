const db = require("../models");

// Defining methods for the ContactController
module.exports = {
  findAll: (req, res) => {
    db.Contact
      .find(req)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err) 
        res.status(422).json(err)
      });
  },
  findById: (req, res) => {
    db.Contact
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  create: (req, res) => {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
};