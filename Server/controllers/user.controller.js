// const passport = require("passport");
const User = require("../models/user.model.js");
const wrapAsync = require("../utils/wrapAsync");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    console.log(users);
    // Send the users as a response
    res.status(200).json(users);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
};

// Register a new user
const registerUser = wrapAsync(async (req, res) => {
  try {
    console.log("Received registration request:", req.body);

    let { username, password, email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      console.log("User already exists:", user);
      return res.status(200).json({
        message: "user already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    let userPhoto = `https://ui-avatars.com/api/?name=${username}&background=29335C&size=128&color=fff&format=png&length=1`;

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      userPhoto,
    });
    const registeredUser = await newUser.save();
    const { password: password_, ...info } = registeredUser._doc;

    console.log("User registered successfully:", info);
    res.status(200).json({
      user: info,
      message: "register success",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(400).json({
      message: "register failed",
      error: error.message,
    });
  }
});

// Login a user
const loginUser = wrapAsync(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        message: "user not found",
      });
    }
    const matchPassword = await bcrypt.compareSync(password, user.password);
    if (!matchPassword) {
      return res.status(200).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        userPhoto: user.userPhoto,
      },
      process.env.SECRET,
      {
        expiresIn: "14d",
      }
    );
    const { password: UserPassword, ...info } = user._doc;
    res
      .cookie("token", token, { sameSite: "None", secure: true })
      .status(200)
      .json({ user: info, message: "login success" });
  } catch (error) {
    res.status(500).json({ message: "login failed", error: error.message });
  }
});

// Logout a user
const logoutUser = wrapAsync((req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: "None", secure: true })
      .status(200)
      .json({ message: "logout success" });
  } catch (error) {
    res.status(500).json({
      message: "logout failed",
      error: error.message,
    });
  }
});

// Get a user
const getUser = wrapAsync(async (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
    if (err) {
      return res.status(404).json({
        message: "get user failed",
        error: err.message,
      });
    }
    res.status(200).json(data);
  });
});

const scanProduct = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Find the user by userId
    const user = await User.findById(userId).populate("productsPurchased");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the product in the productsPurchased array
    const productIndex = user.productsPurchased.findIndex(
      (item) => item._id.toString() === productId
    );

    // If product is not found, return error
    if (productIndex === -1) {
      return res
        .status(404)
        .json({ message: "Product not found in user's purchased products" });
    }

    // Check if plantedDate is present for the product
    if (!user.productsPurchased[productIndex].plantedDate) {
      // If plantedDate is not present, set it to the current date
      user.productsPurchased[productIndex].plantedDate = new Date();
      // Increase cycle stage by 1
      user.productsPurchased[productIndex].cycleStage += 1;
    } else {
      // If plantedDate is already present, just increase cycle stage by 1
      user.productsPurchased[productIndex].cycleStage += 1;
    }

    // Save the updated user object
    await user.save();

    res.status(200).json({ message: "Scan successful", updatedUser: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to scan product", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getAllUsers,
  scanProduct,
};
