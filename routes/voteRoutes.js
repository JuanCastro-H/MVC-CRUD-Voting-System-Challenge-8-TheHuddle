// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const voteController = require("../controllers/voteController");

// --- Ruta Para Votar Un Tema ---
router.post("topics/:id/vote", voteController.VoteTopic);


// --- Ruta Para Votar Por Un Link ---
router.post("/topics/:id/vote", voteController.voteLink);


// --- Exportar router ---
module.exports = router;