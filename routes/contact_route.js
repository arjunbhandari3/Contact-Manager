const router = require("express").Router();
const contactController = require("../controllers/contact_controller");
const auth = require("../middlewares/auth");

router.get("/", auth, contactController.getMyContacts);
router.post("/", auth, contactController.createContact);
router.get("/:id", auth, contactController.getContact);
router.put("/:id", auth, contactController.updateContact);
router.delete("/:id", auth, contactController.deleteContact);

module.exports = router;
