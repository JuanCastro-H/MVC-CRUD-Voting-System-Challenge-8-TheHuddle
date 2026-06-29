// --- Crear router e importar controller ---
const router = require("express").Router();
const topicController = require("../controllers/topicController");

// -------------------------------------
// Ruta para obtener todos los topics
// -------------------------------------
router.get("/", topicController.getAllTopics);

// --- Exportar router ---
module.exports = router;