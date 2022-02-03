const router = require("express").Router();
const authRoutes = require("./auth_route");

router.use("/api/auth", authRoutes);

module.exports = router;
