
import {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from "../services/products.service.js";

// Obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const productos = await obtenerProductos();

        res.status(200).json(productos);

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los productos"
        });
    }
};

// Obtener producto por ID
export const getProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const producto = await obtenerProductoPorId(id);

        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.status(200).json(producto);

    } catch (error) {
        res.status(500).json({
            error: "Error al buscar el producto"
        });
    }
};

// Crear producto
export const postProducto = async (req, res) => {
    try {

        const datos = req.body;

        if (
            !datos.nombre ||
            typeof datos.precio !== "number" ||
            typeof datos.stock !== "number"
        ) {
            return res.status(400).json({
                error: "Datos inválidos"
            });
        }

        const nuevoProducto =
            await crearProducto(datos);

        res.status(201).json({
            mensaje: "Producto creado correctamente",
            producto: nuevoProducto
        });

    } catch (error) {

        res.status(500).json({
            error: "Error al crear el producto"
        });
    }
};

// Actualizar producto
export const putProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const datos = req.body;

        const producto = await actualizarProducto(id, datos);

        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Producto actualizado correctamente",
            producto
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar el producto"
        });
    }
};

// Eliminar producto
export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const eliminado = await eliminarProducto(id);

        if (!eliminado) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Producto eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar el producto"
        });
    }
};

