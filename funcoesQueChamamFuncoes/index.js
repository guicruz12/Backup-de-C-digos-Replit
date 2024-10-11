/* Crie um array de objetos => pessoas
com os seguintes atributos : NOME/SOBRENOME
crie uma função que itere sobre o array e retire nomes e sobrenomes 
crie uma variavel co o conteudo:
      -> const emailBase = "@escola.pr.gov.br"
      a partir desses dados forme um @escola com nome>sobre+emailBase
      execute a função
*/

const { NOME } = require("dns");

const pessoas = [];
const emailBase = "@escola.pr.gov.br";

function gerarEmail() {
  if (pessoas.length < 1) {
    console.log("nenhum cadastrado, cadastre um email");
  } else {
    for (pessoa of pessoas) {
      const nome = pessoa.nome;
      const sobrenome = pessoa.sobrenome;
      const email = `${nome}${sobrenome}${emailBase}`;
      console.log(email.toLocaleLowerCase());
    }
  }
}

function cadastrar(nome, sobrenome) {
  pessoas.push({ nome: nome, sobrenome: sobrenome });
}

cadastrar("Rafael", "Peru");
gerarEmail();
