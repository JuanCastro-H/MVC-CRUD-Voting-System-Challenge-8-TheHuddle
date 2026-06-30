// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const voteController = require("../controllers/voteController");

// --- Ruta Para Votar Un Tema ---
router.post("/topics/:id/vote", voteController.voteTopic);


// --- Ruta Para Votar Por Un Link ---
router.post("/links/:id/vote", voteController.voteLink);


// --- Exportar router ---
module.exports = router;