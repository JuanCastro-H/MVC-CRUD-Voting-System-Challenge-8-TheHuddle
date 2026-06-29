// --- Crear router e importar controller ---
const router = require("express").Router();
const topicController = require("../controllers/topicController");

// -------------------------------------
// Ruta para obtener todos los topics
// -------------------------------------

// --- LISTAR TODOS LOS TEMAS ---
router.get("/", topicController.getAllTopics);

// --- VER UN TEMA ESPECÍFICO ---
router.get("/:id", topicController.getTopicById);


// --- MOSTRAR FORMULARIO DE CREACIÓN ---
router.get("/new", topicController.showCreateForm);





// --- Exportar router ---
module.exports = router;