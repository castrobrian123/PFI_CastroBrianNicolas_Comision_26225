
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from "../models/products.model.js";

export const obtenerProductos = async () => {
    return await obtenerTodos();
};

export const obtenerProductoPorId = async (id) => {
    return await obtenerPorId(id);
};

export const crearProducto = async (datos) => {
    return await crear(datos);
};

export const actualizarProducto = async (id, datos) => {
    return await actualizar(id, datos);
};

export const eliminarProducto = async (id) => {
    return await eliminar(id);
};

