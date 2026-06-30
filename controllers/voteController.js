// --- Importar Modelo de Temas ---
const Topic = require("../models/Topic");

// --- Importar Modelo de Links --
const Link = required("../models/Link");

// --- Logica Para Votar Por un Tema ---
exports.VoteTopic = (req, res) => {

    // --- Aumentar Voto del Tema ---
    Topic.vote(req.params.id);

    // --- Redireccionar a La Pagina de Temas ---
    res.redirect("/topics");

};



