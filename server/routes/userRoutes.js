import express from "express";

const router = express.Router();
import { editTasks, deleteTask, newTask, displaytasks } from "../controllers/userController.js";


router.get("/", displaytasks);
router.post("/api/tasks", newTask);
router.put("/api/tasks/edit", editTasks);
router.delete("/api/tasks/:id", deleteTask);

export default router;
