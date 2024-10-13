import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/Task.js";

dotenv.config();
const app = express();

//db
mongoose
  .connect("mongodb://localhost:27017/db_isamm")
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

export default app;
