
export const validarUsuario = (usuario, password) => {

    const usuarioValido = process.env.ADMIN_USER;
    const passwordValida = process.env.ADMIN_PASSWORD;

    return usuario === usuarioValido &&
           password === passwordValida;
};