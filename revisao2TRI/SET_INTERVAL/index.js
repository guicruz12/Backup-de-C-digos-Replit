//ex 01 -  alterar o salario
let salario = 1000;
const nome = "João";
const sobreNome = "Silva";

function imprimeDados() {
  const pessoa = `Nome: ${nome} ${sobreNome}`;
  const SalarioMo = `R$ ${salario}, 00`;
  console.log(pessoa);
  console.log("Ganha :", SalarioMo);
}

setInterval(imprimeDados(), 1000);

// setInterval(function() {
//     console.clearsssss
//     console.log(salario);
//     salario = salario + 1002546;
// }, 0);

