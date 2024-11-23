import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config({});

const app = express();

app.get("/", (req, res) => {
  res.status(201).json({
    status: "success",
    message: "server is running on port 8080",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`server running on port ${PORT}`);
});
