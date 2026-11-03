
import jwt from "jsonwebtoken";

export const verificarToken = (req, res, next) => {

    // Obtener el encabezado Authorization
    const authHeader = req.headers.authorization;

    // Verificar si existe el token
    if (!authHeader) {
        return res.status(401).json({
            error: "No se proporcionó un token"
        });
    }

    // Comprobar formato Bearer
    const partes = authHeader.split(" ");

    if (partes.length !== 2 || partes[0] !== "Bearer") {
        return res.status(401).json({
            error: "Formato de token inválido"
        });
    }

    const token = partes[1];

    try {

        // Verificar token
        const usuario = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Guardar información del usuario
        req.usuario = usuario;

        // Continuar con la petición
        next();

    } catch (error) {

        return res.status(401).json({
            error: "Token inválido o expirado"
        });
    }
};

