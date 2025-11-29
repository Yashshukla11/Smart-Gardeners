const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();

const corsOrigin = process.env.ORIGIN?.replace(/\/$/, '') || 'http://localhost:5173';
app.use(cors({ origin: corsOrigin, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(methodOverride("_method"));

// routes import
const userRoutes = require("./routes/user.routes.js");
const productRoutes = require("./routes/product.routes.js");

// routes declare
app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Yupp The server is runnng 🎉 !");
});

module.exports = app;
