import express from "express";

const router = express.Router();
import { editTasks, deleteTask, newTask, displaytasks } from "../controllers/userController.js";


router.get("/api/tasks/all", displaytasks);
router.post("/api/tasks/new", newTask);
router.put("/api/tasks/edit", editTasks);
router.delete("/api/tasks/:id", deleteTask);

export default router;
