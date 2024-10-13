import express from "express";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/Task.js";
const router = express.Router();

router.get("/api/tasks");

router.get("/api/tasks/:id");

router.post("/api/tasks/");

router.patch("/api/tasks/:id");

router.delete("/api/tasks/:id");

export default router;