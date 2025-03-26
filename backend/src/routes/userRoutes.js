import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Ruta para registrar un usuario (POST /api/users/register)
router.post("/register", registerUser);

// Nueva ruta de login
router.post("/login", loginUser);

// 🔐 Ruta protegida: Obtener perfil de usuario (requiere token)
router.get("/profile", authMiddleware, getUserProfile);

export default router;
