// --- Importar modelo de link ---
const Link = require("../models/Link");


// =======================================
// Crear un nuevo link
// =======================================
exports.createLink = (req, res) => {
    
    Link.create(req.params.topicId, req.body);     // Crea un link asociado a un tema por su id.

    res.redirect('/topics/${req.params.topicId}'); // Redireccionar a la pagina del tema.

};


