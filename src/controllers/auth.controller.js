
import jwt from "jsonwebtoken";
import { validarUsuario } from "../services/auth.service.js";

export const login = (req, res) => {

    const { usuario, password } = req.body;

    if (!usuario || !password) {
        return res.status(400).json({
            error: "Debes ingresar usuario y contraseña"
        });
    }

    const usuarioValido = validarUsuario(usuario, password);

    if (!usuarioValido) {
        return res.status(401).json({
            error: "Usuario o contraseña incorrectos"
        });
    }

    const token = jwt.sign(
        { usuario: usuario },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.status(200).json({
        mensaje: "Inicio de sesión exitoso",
        token: token,
        tipo: "Bearer"
    });

};

