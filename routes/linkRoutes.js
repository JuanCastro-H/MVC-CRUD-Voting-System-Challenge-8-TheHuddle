// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const linkController = require("../controllers/linkController");


// -------------------------------------
// Ruta para crear un link
// -------------------------------------
router.post("/topics/:topicId/links", linkController.createLink);


// -------------------------------------
// Ruta Formulario de edicion
// -------------------------------------
router.get("/links/:id/edit", linkController.showEditForm);


// -------------------------------------
// Ruta Para Actualizar un link
// -------------------------------------
router.put("/links/:id", linkController.updateLink);


// -------------------------------------
// Ruta Para Eliminar un link
// -------------------------------------
router.delete("/links/:id", linkController.deleteLink);



// --- Exportar router ---
module.exports = router;