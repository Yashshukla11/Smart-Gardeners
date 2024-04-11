const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: true,
    },
    userPhoto: {
      type: String,
    },
    productsPurchased: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        cycleStage: {
          type: Number,
          min: 0,
          max: 5,
        },
        purchaseDate: {
          type: Date,
          default: Date.now,
        },
        plantedDate: {
          type: Date,
          default: null,
        },
        nextExpectedCycleChangeDate: {
          type: Date,
        },
      },
    ],
    // lastTransaction: {
    //   // Placeholder for last transaction details
    // },
    // transactions: {
    //   // Placeholder for all transactions
    // },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
