require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const auth = require("./routes/user");
const { errorMiddleware } = require("./middleware/errorHandler");
// Initialize express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", auth);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(errorMiddleware);
