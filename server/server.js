require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("./routes/user");
const profile = require("./routes/profile");
const { errorMiddleware } = require("./middleware/errorHandler");
const mongoose = require("mongoose");
// Initialize express app
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// connect to database function below

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.use("/api/v1/auth", auth);
app.use("/api/v1/profile", profile);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(errorMiddleware);
