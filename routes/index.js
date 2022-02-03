const router = require("express").Router();
const authRoutes = require("./auth_route");
const contactRoutes = require("./contact_route");

router.use("/api/auth", authRoutes);
router.use("/api/contacts", contactRoutes);

module.exports = router;
