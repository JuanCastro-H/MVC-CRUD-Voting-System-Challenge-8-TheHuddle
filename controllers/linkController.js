// --- Importar modelo de link ---
const Link = require("../models/Link");


// =======================================
// Crear un nuevo link
// =======================================
exports.createLink = (req, res) => {
    
    Link.create(req.params.topicId, req.body);     // Crea un link asociado a un tema por su id.

    res.redirect('/topics/${req.params.topicId}'); // Redireccionar a la pagina del tema.

};


// =======================================
// Mostrar formulario de edición
// =======================================
exports.showEditForm = (req, res) => {

    const link = Link.findById(req.params.id);  // Obtener el link por ID.

    if(!link){
        return res.send("Link no encontrado"); // Si no existe.
    }

    res.render("link/edit", { link });         // Redireccionar a la vista y enviar link.
}



