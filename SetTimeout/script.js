//set interval - executa a cada x milisegundos
/*let n = 0
setInterval(function() {
  console.clear()
  console.log("Executando a cada 1 segundo ", n);
  n = n + 1
}, 1000)

//set timeout - executa apos x milisegundos
setTimeout(function() {
  clearInterval();
  window.alert("Ja passou 5 segundos");
  location.href = "https://www.google.com.br"
}, 5000)
*/

//a) crie um programa que mostre um numero 
//randomico de 0 a 10 a cada 3 segundos




const intervalo2 = setInterval(function() {
  let ale = Math.round(Math.random() * 10)
  console.log(ale)
}, 3000)

setTimeout(function() {
  alert("pop up chato")
  clearInterval(intervalo2)
  location.href = "https://www.google.com.br"
}, 15000)