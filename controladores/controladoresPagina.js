const controladoresPagina = {
    root: (req, res) => {
        res.redirect('/inicio');
    },
    inicio: (req, res) => {
        res.send("Inicio")
    }
}

module.exports = controladoresPagina;