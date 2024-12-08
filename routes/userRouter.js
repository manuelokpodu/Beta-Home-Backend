const router = require("express").Router();
const {
  handleLogin,
  handleRegister,
} = require("../controllers/userController");

router.post("/register", handleRegister);
router.post("/login", handleLogin);

module.exports = router;
