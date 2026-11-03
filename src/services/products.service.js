
import {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
} from "../models/products.model.js";

// Obtener todos los productos
export const obtenerProductos = async () => {
    return await obtenerTodos();
};

// Obtener producto por ID
export const obtenerProductoPorId = async (id) => {
    return await obtenerPorId(id);
};

// Crear producto
export const crearProducto = async (datos) => {
    return await crear(datos);
};

// Actualizar producto
export const actualizarProducto = async (id, datos) => {
    return await actualizar(id, datos);
};

// Eliminar producto
export const eliminarProducto = async (id) => {
    return await eliminar(id);
};

