// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const linkController = require("../controllers/linkController");


// -------------------------------------
// Ruta para crear un link
// -------------------------------------
router.get("/topics/:topicId/links", linkController.createLink);


// -------------------------------------
// Ruta Formulario de edicion
// -------------------------------------
router.get("/links/:id/edit", linkController.showEditForm);


// -------------------------------------
// Ruta Para Actualizar un link
// -------------------------------------
router.put("/links/:id", linkController.updateLink);




// --- Exportar router ---
module.exports = router;