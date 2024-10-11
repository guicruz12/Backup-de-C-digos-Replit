/**
 * Arrays sao listas ou uniformes
 * podem ser iterados
 * sao ordenados por indicies (a partir do indice 0)
 * podem conter valores de tipos diferentes
 * podemos altera-los em tempo real
 */

const jogos = ["GTA", "FIFA", false, "MINECRAFT", 333];
// indice
console.log(jogos);
console.log(jogos[3]);
jogos[12] = "COD";  
console.log(jogos[12])
jogos[23]= "pipi"
console.log(jogos[23]);

//Metodos
jogos.push('MINECRAFT');//insere no final da fila
jogos.shift()//remove o primeiro
jogos.unshift('FIFA')
jogos.pop()//retira o ultimo
console.log(jogos.length);// mede o comprimento da lista

console.log(jogos)

let teste = setTimeout(function () {
  var nome = prompt("digite seu nome")
}, 2000)
