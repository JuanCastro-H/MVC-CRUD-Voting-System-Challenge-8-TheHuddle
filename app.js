const express = require("express");

const app = express();

// -------------------------------------
// IMPORTAR ROUTERS
// -------------------------------------
const topicRoutes = require("./routes/topicRoutes");
const authRoutes = require("./routes/authRoutes");
const linkRoutes = require("./routes/linkRoutes");
const voteRoutes = require("./routes/voteRoutes");


// --- EJS ---
app.set("view engine", "ejs"); // Las vistan van a usar EJS.
app.set("views", "./views");   // Posicion de la carpeta.


// Middleware
// --- Transformar texto plano HTML a objeto js ---
app.use(express.urlencoded({extended: true})); // HTML a objeto js - Datos complejos.
app.use(express.json());                       // JS en formato json.


// --- Enviar archivos en public al navegador ---
app.use(express.static("public"));

// --- PERMITIR PUT Y DELETE DESDE FORMULARIOS --
app.use(methodOverride("_method"));


// --- Configuracion de rutas ---
app.use("/topics", topicRoutes);
app.use("/login", authRoutes);
app.use("/link", linkRoutes);
app.use("/votes", voteRoutes);


// --- Servidor escuchando en el puerto 3000 ---
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
    console.log("Hola")
});

// --- Ruta de prueba ---
app.get("/", (req, res) => {
    res.send("CRUD");
});