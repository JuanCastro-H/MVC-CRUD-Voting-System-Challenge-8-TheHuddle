// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const voteController = require("../controllers/voteController");


// ----------------------------------------
// Ruta para Obtener los votos de un tema
// ----------------------------------------
router.get("/", voteController.VoteTopic);

// --- Exportar router ---
module.exports = router;