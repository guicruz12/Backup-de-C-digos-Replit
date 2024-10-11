// SETInterval
/**
 * Uma função personalizada a cada 2 seg
 * deve imprimir um obj
 */

const Objeto = {
  nome: "João",
  idade: "25",
  cidade: "São Paulo",
};

function OBJ() {
  const obj = `Nome: ${Objeto.nome}\nIdade: ${Objeto.idade}\nCidade: ${Objeto.cidade}\n`;
  console.log(obj);
}

let print = setInterval(function () {
  OBJ();
}, 2000);

setTimeout(function () {
  clearInterval(print);
}, 11000);
