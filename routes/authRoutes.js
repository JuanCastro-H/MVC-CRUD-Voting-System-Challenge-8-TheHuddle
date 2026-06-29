// --- Crear ruoter y obtener controlador ---
const router = require("express").Router();
const authController = require("../controllers/authController");


// -------------------------------------
// Ruta para Logearse
// -------------------------------------
router.get("/", authController.login);

// --- Exportar router ---
module.exports = router;