// --- Logica para ver todos los temas ---
exports.getAllTopics = (req, res) => {
    res.render("topics/index");
    console.log("Controldor funcionando");
}