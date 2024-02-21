const express = require("express")
const app = express()
const db = require("./db/conexao")
const bodyParser = require("body-parser")

const PORT = 3000

app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`)
})

// body parser
app.use(bodyParser.urlencoded({
    extended: false
}))

// conexão com banco de dados
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso")
    })
    .catch(err => {
        console.log(`Ocorreu um erro ao conectar ${err}`)
    })

// rotas
app.get('/', (req, res) => {
    res.send("Está funcionando")
})

// rotas do job
app.use("/jobs", require("./routes/jobs"))