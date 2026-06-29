const fs = require("fs");     // fs -> File System: Libreria que trabaja con archivos.
const path = require("path"); // Sirve para construir rutas de archivos.

// --- Construir ruta adsoluta completa a la base de datos ---
const dbPath = path.join(__dirname, "../data/db.json");

// -----------------------------------
// Funcion: Para Leer BD 
// -----------------------------------
const getDB = () => {
    return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
};


// -----------------------------------
// Funcion: Para Guardar Datos
// -----------------------------------
const saveDB = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};


// ========================================
// Modelo Link:
// * Centraliza todas las operaciones CRUD
// ========================================
class Link {

    // --- Obtener Todos los links registrados ---
    static findAll(){
        return getDB().links;
    }


    // --- Buscar un Link por su ID ---
    static findById(id){
        const db = getDB();

        return db.links.find(link => link.id === Number(id));
    }


    // --- Obtener links de un Tema ---
    static findByTopic(topicId){
        const db = getDB();

        return db.links.filter(link => link.topicId === Number(topicId));
    }

}


// --- Exportar modelo de link ---
module.exports = Link;