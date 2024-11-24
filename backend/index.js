import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
dotenv.config({});

const app = express();

app.get("/", (req, res) => {
  res.status(201).json({
    status: "success",
    message: "server is running on port 8080",
  });
});

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes--------------
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`server running on port ${PORT}`);
});
