// --- Importar Modelo de los temas ---
const Topic = require("../models/Topic");

// --- Importar Modelo de los Links ---
const Link = require("../models/Link");


// --- Logica para ver todos los temas ---
exports.getAllTopics = (req, res) => {
    const topics = Topic.findAll();         // Obtenemos todos los temas
    res.render("topics/index", { topics }); // Pasamos los temas al view.
    
}


// --- Ver un tema por ID
exports.getTopicById = (req, res) => {
    const topic = Topic.findById(req.params.id);        // Obtener tema por Id.

    if (!topic) return res.send("Topic no encontrado"); // Verificar si existe.

    const links = Link.findByTopic(req.params.id);

    res.render("topics/show", {                         // Pasarle el Tema Y Links a show.
        topic,
        links
    });               
}


// --- Formulario para crear un tema ---
exports.showCreateForm = (req, res) => {
    res.render("topics/new");  // Muestra el formulario para crear tema.        
}


// --- Crear Tema ---
exports.createTopic = (req, res) => {
    Topic.create(req.body);   // Obtiene la data del form y crea el tema.
    res.redirect("/topics");  // Redireccionar a la pagina principal.
}


// --- Formulario para editar un tema ---
exports.showEditForm = (req, res) => {
    const topic = Topic.findById(req.params.id);  // Obtiene el tema a editar.

    res.render("topics/edit", { topic });         // Muestra el formulario con el tema cargado.
}


// --- Editar tema (PUT) ---
exports.updateTopic = (req,res) => {
    Topic.update(req.params.id, req.body);  //  Obtiene Id y data y actualizar.
    res.redirect("/topics");                // Redirigir a la pagina principal.
}


// --- Eliminar un tema ---
exports.deleteTopic = (req, res) => {
    Topic.delete(req.params.id);     // Obtiene el Id y borra el tema.
    res.redirect("/topics");         // Redirecionar a la pagina principal.
}






