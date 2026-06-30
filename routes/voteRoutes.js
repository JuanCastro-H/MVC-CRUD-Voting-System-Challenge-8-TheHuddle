// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const voteController = require("../controllers/voteController");

// --- Ruta Para Votar Un Tema ---
router.post("topics/:id/vote", voteController.VoteTopic);




// --- Exportar router ---
module.exports = router;