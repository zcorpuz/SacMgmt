const router = require("express").Router();
const contactController = require("../../controllers/index");

// Matches with "/api/books"
router.route("/")
  .get(contactController.findAll)
  .post(contactController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contactController.findById)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;
