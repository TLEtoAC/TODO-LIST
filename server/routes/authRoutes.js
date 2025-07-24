import express from "express";

const router = express.Router();
import { login,signup } from "../controllers/authController.js";
router.post("/api/login", login);
router.post("/api/signup", signup);

export default router;