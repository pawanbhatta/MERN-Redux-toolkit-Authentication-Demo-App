const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Importing Routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");

// Middlewares
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoutes);
app.use("/api/posts", postRoutes);

// Connecting to database
mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to database")
);

app.listen(5000, () => console.log("Listenning to port 5000...."));
