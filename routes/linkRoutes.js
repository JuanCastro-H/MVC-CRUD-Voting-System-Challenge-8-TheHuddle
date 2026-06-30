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






// --- Exportar router ---
module.exports = router;