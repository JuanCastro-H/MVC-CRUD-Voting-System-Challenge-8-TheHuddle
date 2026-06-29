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
// Modelo Topic:
// * Centraliza todas las operaciones CRUD
// ========================================
class Topic {


    // --- Obtener todos los temas registrados ---
    static findAll(){
        const db = getDB();
        return db.topics;
    }


    // --- Buscar un tema por su id ---
    static findById(id){
        const db = getDB();
        return db.topics.find(topic => topic.id === Number(id));
    }

}

// --- Exportar modelo ---
module.exports = Topic;