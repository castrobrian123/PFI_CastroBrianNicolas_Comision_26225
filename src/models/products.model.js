
import db from "../config/firebase.js";

const coleccion = db.collection("products");

// Obtener todos los productos
export const obtenerTodos = async () => {
    const snapshot = await coleccion.get();

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

// Obtener producto por ID
export const obtenerPorId = async (id) => {
    const documento = await coleccion.doc(id).get();

    if (!documento.exists) {
        return null;
    }

    return {
        id: documento.id,
        ...documento.data()
    };
};

// Crear producto
export const crear = async (datos) => {
    const nuevoDocumento = await coleccion.add(datos);

    return {
        id: nuevoDocumento.id,
        ...datos
    };
};

// Actualizar producto
export const actualizar = async (id, datos) => {
    const documento = coleccion.doc(id);

    const existe = await documento.get();

    if (!existe.exists) {
        return null;
    }

    await documento.update(datos);

    return {
        id,
        ...existe.data(),
        ...datos
    };
};

// Eliminar producto
export const eliminar = async (id) => {
    const documento = coleccion.doc(id);

    const existe = await documento.get();

    if (!existe.exists) {
        return false;
    }

    await documento.delete();

    return true;
};

