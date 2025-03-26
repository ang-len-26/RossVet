import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB(); 

// Crear la aplicación Express
const app = express();

// Middleware para manejar JSON
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Definir rutas del usuario
app.use("/api/users", userRoutes);

// Definir rutas de los productos
app.use("/api/products", productRoutes);

// prueba de conexion con el frontend
app.get("/api/ruta-de-prueba", (req, res) => {
	res.json({ mensaje: "Hola desde el backend" });
  });

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
