// --- Importar Modelo de los temas ---
const Topic = require("../models/Topic");


// --- Logica para ver todos los temas ---
exports.getAllTopics = (req, res) => {
    const topics = Topic.findAll();         // Obtenemos todos los temas
    res.render("topics/index", { topics }); // Pasamos los temas al view.
    
}


// --- Ver un tema por ID
exports.getTopicById = (req, res) => {
    const topic = Topic.findById(req.params.id);        // Obtener tema por Id.

    if (!topic) return res.send("Topic no encontrado"); // Verificar si existe.

    res.render("topics/show", { topic });               // Pasarle el tema a show.
}


