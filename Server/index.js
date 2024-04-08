const connectDB = require("./db/index.js");
const app = require("./app");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, "0.0.0.0", () => {
      console.log("Server listening on port " + process.env.PORT || 8000);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection failed !! ", err);
  });
