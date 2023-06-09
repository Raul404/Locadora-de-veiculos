const express = require("express");
const rotaVeiculo = require("./routes/veiculo.routes")
const app = express()

app.use(express.json())
app.use('/veiculos', rotaVeiculo)

const port = 8000
app.listen(port,() =>{
    console.log(`servidor rodando no link http://localhost:${port}/veiculos`)
})

module.exports = app;
