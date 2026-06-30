// --- Importar modelo de link ---
const Link = require("../models/Link");


// =======================================
// Crear un nuevo link
// =======================================
exports.createLink = (req, res) => {
    
    Link.create(req.params.topicId, req.body);     // Crea un link asociado a un tema por su id.

    res.redirect(`/topics/${req.params.topicId}`); // Redireccionar a la pagina del tema.

};


// =======================================
// Mostrar formulario de edición
// =======================================
exports.showEditForm = (req, res) => {

    const link = Link.findById(req.params.id);  // Obtener el link por ID.

    if(!link){
        return res.send("Link no encontrado"); // Si no existe.
    }

    res.render("links/edit", { link });         // Redireccionar a la vista y enviar link.
}



// =======================================
// Actualizar un link 
// =======================================
exports.updateLink = (req, res) => {

    const updatedLink = Link.update(req.params.id, req.body); // Actualizar informacion del link.

    res.redirect(`/topics/${updatedLink.topicId}`);           // Redicreccionaar al tema del link.
}


// =======================================
// Eliminar un link
// =======================================
exports.deleteLink = (req, res) => {

    const link = Link.findById(req.params.id);  // Buscar link por su ID.

    if (!link){
        return res.send("Link no encontrado");  // Si no existe.
    }

    Link.delete(req.params.id);                 // Eliminar link.

    res.redirect(`/topics/${link.topicId}`);    // Redireccionar al tema del link.
}


