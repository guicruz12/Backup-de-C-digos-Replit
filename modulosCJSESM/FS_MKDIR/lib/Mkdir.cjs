// criar função que gera pasta
const fs = require('node:fs');
const path = require('node:path');

//criar uma função sem o PAth
function criarPastaEstatica(Pasta) {
  fs.mkdir(Pasta, function(err) {
    console.log("Erro ao criar pasta")
    console.log(err)
  })
}
//criar pasta dinamica
function criarPastaDinamica(Pasta) {
  if (!fs.existsSync(path, path.join(__dirname, Pasta))) {
    fs.mkdirSync(path.join(__dirname, Pasta))
    console.log(`Pasta ${Pasta} criada com sucesso`)
  } else {
    console.log(`Não foi possivel criar a pasta ${Pasta}`)
  }
}

//exportar modulos
module.exports = { criarPastaEstatica, criarPastaDinamica }