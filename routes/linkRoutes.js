// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const linkController = require("../controllers/linkController");


// -------------------------------------
// Ruta para crear un link
// -------------------------------------
router.get("/topics/:topicId/links", linkController.createLink);






// --- Exportar router ---
module.exports = router;