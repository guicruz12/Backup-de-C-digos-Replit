// EXPORTS EJS
// VARIAVEIS 
// VARIAVEIS, FUNÇÕES CLASSES

const nome = "João";

function dizOla(){
  return `Olá, ${nome}`;
  
}
//exposição inline
export function toUpper(text){
  return `${text.toUpperCase()}`;
}

//Exportação default (padrão)
function toLower(text) {
  return `${text.toLowerCase()}`;
}
export default toLower;

//Exportação multiplas
export { nome, dizOla };