const Router = require("express");
const {
  loginUser,
  registerUser,
  getUser,
  getAllUsers,
  scanProduct,
} = require("../controllers/user.controller");

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/get", getUser);
router.get("/alluser", getAllUsers);
router.get("/scan", scanProduct);

module.exports = router;
