const fs = require("fs")

function ServiceGetAllVeiculos (){
    return JSON.parse( fs.readFileSync("veiculos.json"))
}
function ServicegetIdVeiculo (id){
   const veiculo = JSON.parse( fs.readFileSync("veiculos.json"))
   const veiculoFiltrado = veiculo.filter(livro => livro.id === Number(id))[0]
   return veiculoFiltrado
}


function ServicePostVeiculo (postVeiculo){
    const veiculo = JSON.parse( fs.readFileSync("veiculos.json"))
    const NovalistDelivros = JSON.stringify([...veiculo, postVeiculo])
    fs.writeFileSync("veiculos.json", NovalistDelivros)
    
 }


function ServicePatchVeiculo(patchVeiculo,id){
    let allveiculos = JSON.parse( fs.readFileSync("veiculos.json"))
    const indexmodified = allveiculos.findIndex(livro => livro.id === Number(id))
    const modifiedVeiculos = {...allveiculos[indexmodified], ...patchVeiculo}
    allveiculos[indexmodified] = modifiedVeiculos
    fs.writeFileSync("veiculos.json", JSON.stringify( allveiculos) )
}


function ServiceDeleteVeiculo(id){
    const veiculo = JSON.parse( fs.readFileSync("veiculos.json"))
    const veiculoFiltrado = veiculo.filter(livro => livro.id !== Number(id))
    fs.writeFileSync("veiculos.json", JSON.stringify( veiculoFiltrado) )

}
module.exports = {
    ServiceGetAllVeiculos,
    ServicegetIdVeiculo,
    ServicePostVeiculo,
    ServicePatchVeiculo,
    ServiceDeleteVeiculo
}