//loops sao laços / ciclos de repetição infinita
//for, for in, for of, foreach, while, do while
// loop: INICIALIZÇÃO, CONDIÇÃO DE PARADA, INCREMENTO

// const pokedex = ['pikachu', 'charmander', 'squirtle', 'bulbasaur', 'charizard'];
// //                  0             1             2            3             4
// const valores = [150,1200,345,56]

const pokemonlist = [
  { nome: "pikachu", tipo: "eletrico" },
  { nome: "charmander", tipo: "fogo" },
  { nome: "squirtle", tipo: "agua" },
  { nome: "bulbasaur", tipo: "grama" },
];

//faça um loop e retorne nome+tipo de cada pokemon
for (let pokemon of pokemonlist) {
  console.log(pokemon.nome + " - " + pokemon.tipo);
}

// http://pythontutor.com/

// for(let i in valores){
//   console.log(i);
// }
// for (let i of pokedex) {
//   console.log(i);
// }

// LOOP FOR IN
