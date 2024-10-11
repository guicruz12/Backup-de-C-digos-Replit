//declarar funções
function dizOla() {
  console.log("Olá");
}

function olaPessoa(nome) {
  console.log("Ola, "+ nome);
}

const salario = 2500
function formataSalario(){
  return "R$ " + salario + ",00"
}
// funções do tipo arrow(seta)

const imprimeMeuTime = () => {
  return "Vasco";
}


//invocação de funções
dizOla();
olaPessoa("João");
console.log(formataSalario())
console.log(imprimeMeuTime())