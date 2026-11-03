
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Importar rutas
import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

// Middlewares globales
app.use(cors());
app.use(bodyParser.json());

// Conectar rutas
app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);

// Ruta principal
app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "API REST funcionando correctamente"
    });
});

// Middleware 404
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});