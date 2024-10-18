import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/Task.js";
import authRoutes from "./routes/Auth.js";
dotenv.config();
const app = express();

//db
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected successfuly");
  })
  .catch((e) => {
    console.log("connection failed", e);
  });

// middlewares
app.use(express.json());
app.use(cors());

//endpoints
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

export default app;
