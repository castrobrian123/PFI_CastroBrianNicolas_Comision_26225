
import db from "../config/firebase.js";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const coleccion = collection(db, "products");

export const obtenerTodos = async () => {

    const snapshot = await getDocs(coleccion);

    return snapshot.docs.map((documento) => ({
        id: documento.id,
        ...documento.data()
    }));

};

export const obtenerPorId = async (id) => {

    const referencia = doc(
        db,
        "products",
        id
    );

    const documento = await getDoc(referencia);

    if (!documento.exists()) {
        return null;
    }

    return {
        id: documento.id,
        ...documento.data()
    };

};

export const crear = async (datos) => {

    const nuevoDocumento = await addDoc(
        coleccion,
        datos
    );

    return {
        id: nuevoDocumento.id,
        ...datos
    };

};

export const actualizar = async (id, datos) => {

    const referencia = doc(
        db,
        "products",
        id
    );

    const existe = await getDoc(referencia);

    if (!existe.exists()) {
        return null;
    }

    await updateDoc(referencia, datos);

    return {
        id,
        ...existe.data(),
        ...datos
    };

};

export const eliminar = async (id) => {

    const referencia = doc(
        db,
        "products",
        id
    );

    const existe = await getDoc(referencia);

    if (!existe.exists()) {
        return false;
    }

    await deleteDoc(referencia);

    return true;

};

