const Router = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
  getUser,
  getAllUsers,
} = require("../controllers/user.controller");

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logoutUser);
router.get("/get", getUser);
router.get("/alluser", getAllUsers);

module.exports = router;
