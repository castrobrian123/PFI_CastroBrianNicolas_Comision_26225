
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { verificarToken } from "./src/middlewares/auth.middleware.js";

import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", verificarToken, productsRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "API REST funcionando correctamente"
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(
            `Servidor funcionando en http://localhost:${PORT}`
        );
    });
}

export default app;

