const db = require("../models/contact");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Contact
      .find(req.q)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err) 
        res.status(422).json(err)
      });
  },
  findById: function(req, res) {
    db.Contact
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  create: function(req, res) {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    db.Contact
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  remove: function(req, res) {
    db.Contact
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  }
};