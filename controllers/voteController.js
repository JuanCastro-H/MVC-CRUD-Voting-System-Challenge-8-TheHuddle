// --- Importar Modelo de Temas ---
const Topic = require("../models/Topic");

// --- Importar Modelo de Links --
const Link = require("../models/Link");


// --- Logica Para Votar Un Tema ---
exports.voteTopic = (req, res) => {

    // --- Aumentar Voto Y Guardar Tema ---
    const topic = Topic.vote(req.params.id);

    // --- Devuelve el Tema En Json ---
    res.json(topic)

};


// --- Logica Para Votar Un Link ---
exports.voteLink = (req, res) => {
    
    // --- Obterner Y Aumentar voto Del Link ---
    const link = Link.vote(req.params.id);

    // --- Redireccionar al Tema Del Link --- 
    res.json(link);
}

