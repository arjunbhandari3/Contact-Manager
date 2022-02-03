const router = require("express").Router();
const contactController = require("../controllers/contact_controller");
const auth = require("../middlewares/auth");
const { validator } = require("../middlewares/validator");
const { contactValidation } = require("../utils/validators/contact_validator");

router.get("/", auth, contactController.getMyContacts);
router.post(
  "/",
  auth,
  contactValidation,
  validator,
  contactController.createContact
);
router.get("/:id", auth, contactController.getContact);
router.put(
  "/:id",
  auth,
  contactValidation,
  validator,
  contactController.updateContact
);
router.delete("/:id", auth, contactController.deleteContact);

module.exports = router;
