import express from "express";
import { validate } from "../controllers/authController.js";
const router = express.Router();
import { login,signup } from "../controllers/authController.js";
router.post("/api/login",validate, login);
router.post("/api/signup",validate, signup);

export default router;