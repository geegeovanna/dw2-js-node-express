// Variáveis podem ser declaradas em 3 formas:
// VAR, CONST e LET.
// VAR: no geral evite o seu uso, pode não ser muito seguro.
// LET: utilize quendo for necessário reatribuir o valor da variável.
// CONST: utilize quando não precisar reatribuir o valor da variável.

// var nome = "Ge"
// var nome = "Jeh"
// let cidade = "Registro"
// let cidade = "Jacupiranga" - Não pode
// let endereço
// endereço = "Rua ...."
// const idade - Não pode
// const idade = 19
// idade = 20 - Não pode

// TIPOS DE FUNÇÕES

// FUNÇÃO SIMPLES

const message = "<h2> Olá! Bem-vindo! Essa é a sua primeira função! </h2>";
function showMessage() {
  document.write(message);
}

// Invocando a função:
showMessage();

// FUNÇÃO COM PARÂMETRO
// function açao(parametro){
// }

const user = "Geovanna";

function userMessage(user) {
  // Essa função recebe um parâmetro
  document.write(`<h3>O que deseja fazer hoje, ${user} ? </h3>`);
  // ${} - Template Strings / Literal Strings
  // É usado para inserir variáveis dentro de Strings (aspas)
}
userMessage(user); // Argumento

// FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 19;
const n2 = 12;

function mult(n1, n2) {
  //Essa função recebe 2 parâmetros
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`);
}
mult(n1, n2);

// FUNÇÃO COM RETORNO
const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2;
}
document.write(
  `<p>A divisão de ${num1} por ${num2} é igual a ${div(num1, num2)}</p>`
);

// FUNÇÃO COM DIFERENTES RETORNOS
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(
  `<p>O número ${number} é <strong>${parImpar(number)}</strong></p>`
);
