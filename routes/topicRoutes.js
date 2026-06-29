// --- Crear router e importar controller ---
const router = require("express").Router();
const topicController = require("../controllers/topicController");

// -------------------------------------
// Ruta para obtener todos los topics
// -------------------------------------

// --- LISTAR TODOS LOS TEMAS ---
router.get("/", topicController.getAllTopics);

// --- MOSTRAR FORMULARIO DE CREACIÓN ---
router.get("/new", topicController.showCreateForm);

// --- MOSTRAR FORMULARIO DE EDICIÓN ---
router.get("/:id/edit", topicController.showEditForm);

// --- VER UN TEMA ESPECÍFICO ---
router.get("/:id", topicController.getTopicById);

// --- CREAR UN NUEVO TEMA ---
router.post("/", topicController.createTopic);

// --- EDITRA UN TEMA ---
router.put("/:id", topicController.updateTopic);

// --- ELIMINAR UN TOPIC ---
router.delete("/:id", topicController.deleteTopic);


// --- Exportar router ---
module.exports = router;