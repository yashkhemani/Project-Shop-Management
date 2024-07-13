/* Initialising my first server */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const shopRoute = require("./routes/shop");
const productRoute = require("./routes/products");

// Environment variables
const PORT = process.env.PORT || 3001;
const DB_CONNECT = process.env.DB_CONNECT;

// Connecting to MongoDB
mongoose
  .connect(DB_CONNECT, process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Routes Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/shops", shopRoute);
app.use("/api/products", productRoute);
app.use("/", shopRoute); // Assuming you want the shop route to also handle root path

//start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
