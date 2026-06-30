// --- Importar Modelo de Temas ---
const Topic = require("../models/Topic");

// --- Importar Modelo de Links --
const Link = require("../models/Link");


// --- Logica Para Votar Un Tema ---
exports.voteTopic = (req, res) => {

    // --- Aumentar Voto del Tema ---
    Topic.vote(req.params.id);

    // --- Redireccionar a Lista de Temas ---
    res.redirect("/topics");

};


// --- Logica Para Votar Un Link ---
exports.voteLink = (req, res) => {
    
    // --- Obterner Y Aumentar voto Del Link ---
    const link = Link.vote(req.params.id);

    // --- Redireccionar al Tema Del Link --- 
    res.redirect(`/topics/${ link.topicId }`);
}

