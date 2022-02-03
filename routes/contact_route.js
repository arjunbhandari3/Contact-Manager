const router = require("express").Router();
const contactController = require("../controllers/contact_controller");
const auth = require("../middlewares/auth");

router.get("/", auth, contactController.getMyContacts);
router.post("/", auth, contactController.createContact);

module.exports = router;
