// --- Logica para logearse ---
exports.login = (req, res) => {
    res.render("auth/login.ejs");
    console.log("Auth esta funcionando");
};
