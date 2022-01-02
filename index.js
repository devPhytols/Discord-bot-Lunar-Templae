const express = require("express"),
    app = express(),
    PORT = process.env.PORT || 80;

app.set("view engine", "ejs");
app.use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }));

// Rota para a página Principal
app.get("/", (req, res) => {
    res.render('index');
});

// Rota para a página de Comandos
app.get("/commands", async (req, res) => {
    res.render('commands');
});

// Rota de Erros
app.all("*", (req, res) => {
    return res.render("404");
});

// Inicia o Express
app.listen(PORT, () => {
    console.log('[Roteamento]: ' + 'Porta : [' + PORT + ']')
});