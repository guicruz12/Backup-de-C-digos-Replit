// criar pastas com nodejs

const fs = require('fs')
const path = require('path')

//criando com caminhos estáticos
function PastaEstatica(nomePasta){
  fs.mkdir(nomePasta, function(err) {
      console.log("erro ao criar pasta")
      console.log(err)
  })
}

function PastaDinamica(nomePasta) {
   if (!fs.existsSync(nomePasta)){
       if (!fs.existsSync(path.join(__dirname, nomePasta))) {
           fs.mkdirSync(path.join(__dirname, nomePasta))
           console.log("--- CRIADO COM SUCESSO ----")
           return true 
       } else {
           console.log(`A PASTA "${nomePasta}" ja existe`)
           return false 
       }
   }
}

module.exports = { PastaEstatica, PastaDinamica } 