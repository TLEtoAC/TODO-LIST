import express from "express";

const router = express.Router();
import { login,signup } from "../controllers/authController";
router.post("/api/login", login);
router.post("/api/signup", signup);

export default router;