// --- Importar Modelo de los temas ---
const Topic = require("../models/Topic");


// --- Logica para ver todos los temas ---
exports.getAllTopics = (req, res) => {
    const topics = Topic.findAll();         // Obtenemos todos los temas
    res.render("topics/index", { topics }); // Pasamos los temas al view.
    
}

