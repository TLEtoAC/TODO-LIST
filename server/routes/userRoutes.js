import express from "express";

const router = express.Router();
import { editTasks, deleteTask, newTask, displaytasks } from "../controllers/userController";


router.get("/", displaytasks);
router.post("/newtask", newTask);
router.put("editTask", editTasks);
router.delete("deletetask", deleteTask);

export default router;
