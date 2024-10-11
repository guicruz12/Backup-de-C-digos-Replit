// Operador Ternario serve para fazer escolha do fluxo de uma condição, ou seja podemos substituir o if else por ele
//Exemplo

//Jeito tradicional
const idade = 17;

if (idade >= 18) {
  console.log("Pode entrar");
} else {
  console.log("Acesso negado");
}

//Jeito com o ternario
const passe = idade >= 18 ? "Pode entrar" : "Acesso negado";
//                        if             else
console.log(passe);

//Ternario com multiplos valores

const operador = "+";

function calcula(n1, n2, op) {
  const res =
    op === "+"
      ? n1 + n2
      : op === "-"
        ? n1 - n2
        : op === "*"
          ? n1 * n2
          : n1 / n2;
  return res;
}
console.log(calcula(1, 2, operador));

function caculadora(n1, n2, op) {
  let res = 0;
  if (op === "+") {
    res = n1 + n2;
  } else if (op === "-") {
    res = n1 - n2;
  } else if (op === "*") {
    res = n1 * n2;
  } else {
    op === "/";
    res = n1 / n2;
  }
  return res;
}
console.log(caculadora(1, 2, operador));

// Desafio
// 1) Crie um array pessoas
//deve haver um objeto com nome / idade / sexo

// 2) Crie um array vazio que se chama meninos
// 3) Crie um array vazio que se chama meninas
// Faça uma função que
//Itere (loops) sobre o array pessoas
//Se o sexo for igual a 'F' adicione o nome da pessoa no array meninas
//(array.push(obj))
//caso contrario adicione no array meninos
// Imprima os Objetos  [pessoas, meninos, meninas]

const pessoas = {
  "nome": "Maria",
  "idade": 18,
  "sexo": "F",
};

