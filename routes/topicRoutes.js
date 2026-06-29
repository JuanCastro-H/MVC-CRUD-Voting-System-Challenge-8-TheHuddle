// --- Crear router e importar controller ---
const router = require("express").Router();
const topicController = require("../controllers/topicController");

// -------------------------------------
// Ruta para obtener todos los topics
// -------------------------------------

// --- LISTAR TODOS LOS TOPICS ---
router.get("/", topicController.getAllTopics);

// --- VER UN TOPIC ESPECÍFICO ---
router.get("/:id", topicController.getTopicById);



// --- Exportar router ---
module.exports = router;