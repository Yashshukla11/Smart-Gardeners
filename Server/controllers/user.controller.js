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

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "365d" });
};

const registerUser = wrapAsync(async (req, res) => {
  // try {
  const { username, password, email, dob, gender, name } = req.body;
  console.log({ username, password, email, dob, gender, name });
  const existingUser = await User.findOne({ email });
  console.log(existingUser);
  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    username,
    dob,
    gender,
    name,
    password: hashedPassword,
  });

  const registeredUser = await newUser.save();

  const token = createToken(registeredUser._id);

  res.status(200).json({ user: registeredUser, token });
  // } catch (error) {
  //   res.status(400).json({
  //     message: "Register failed",
  //     error: error.message,
  //   });
  // }
});

const loginUser = wrapAsync(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = createToken(user._id);

      res.status(200).json({
        user,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Logout a user
// const logoutUser = wrapAsync((req, res) => {
//   try {
//     res
//       .clearCookie("token", { sameSite: "None", secure: true })
//       .status(200)
//       .json({ message: "logout success" });
//   } catch (error) {
//     res.status(500).json({
//       message: "logout failed",
//       error: error.message,
//     });
//   }
// });

// Get a user
const getUser = wrapAsync(async (req, res) => {
  const { token } = req.body;
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
  // logoutUser,
  getUser,
  getAllUsers,
  scanProduct,
};
