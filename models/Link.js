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


    // --- Crear Un Nuevo Link ---
    static create(topicId, data){
        const db = getDB();

        // --- Obtener Data del Link ---
        const newLink = {
            id          : Date.now(),       // Id del link.
            topicId     : Number(topicId),  // Id del tema del link.
            title       : data.title,       // Titulo del link.
            url         : data.url,         // Url del link.
            description : data.description, // Descripcion del link.
            votos       : 0,                // Votos del link.
            createdAt   : new Date()        // Momento en el que se creo el link.
        }

        // --- Agregar el Link a la BD ---
        db.links.push(newLink);

        // --- Guardar Cambios ---
        saveDB(db);

        // --- Retornar nuevo link ---
        return newLink
    }


    // --- Actualizar link existente ---
    static update(id,data){
        const db = getDB();

        // --- Buscar la posicion/indice del link ---
        const index = db.links.findIndex(link => link.id === Number(id));

        // --- Si no se encuentra devolver null ---
        if (index === -1) return null;

        // --- Actualizar Campos Modificados ---
        db.links[index] = {

        ...db.links[index],             //
        title       : data.title,       //
        url         : data.url,         //
        description : data.description  //

        }

        // --- Guardar Cambios ---
        saveDB(db);


        // --- Retornar Link Actualizado ---
        return db.links[index];

    }


    // --- Eliminar un Link por su ID ---
    static delete(id) {
        const db = getDB();

        // --- Filtrar todos los demas links ---
        db.links = db.links.filter(link => link.id !== Number(id)); // Deja afuera el link a eliminar.

        // --- Guardar Cambios ---
        saveDB(db);
    }


    // --- Eliminar Todos los Links De Un Tema ---
    static deleteByTopic(topicId){
        const db = getDB();

        // --- Buscar los links que no coincidan con el id del Tema ---
        db.links = db.links.filter(link => link.topicId !== Number(topicId));

        // --- Guardar en la base de datos ---
        saveDB(db);

    }

}


// --- Exportar modelo de link ---
module.exports = Link;