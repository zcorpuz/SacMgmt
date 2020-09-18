const router = require("express").Router();
const contactController = require("../../controllers/index");

// Matches with "/api/contact"
router.route("/")
  .get(contactController.findAll)
  .post(contactController.create);

// Matches with "/api/contact/:id"
router
  .route("/:id")
  .get(contactController.findById)
module.exports = router;
