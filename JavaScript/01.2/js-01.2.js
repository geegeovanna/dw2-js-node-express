// FUNÇÃO ANÔNIMA - funções sem nome que ficam guardadas em uma variavel
// function (n1, n2){
// return n1 + n2
//}
const soma = function (n1, n2) {
  return n1 + n2;
};
document.write(`<p>O resultado da soma é ${soma(8, 7)}.</p>`); // passando parâmetro para uma variavel
const tipo = typeof soma; // typeof - mostra o tipo de algo
document.write(`${tipo}`);

// ARROW FUNCTION (função anônima) - função flecha - substitui o function por uma flecha - arrow function com 1 parâmetro pode ocultar os parenteses.
const dobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}.</p>`);

// ARROW FUNCION COM MAIS DE 1 PARÂMETRO
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
// eval é uma função nativa do javascript que realiza calculos a partir de dois numeros e um operador. A ordem não pode mudar.
document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}.</p>`);

// SIMPLIFICANDO ARROW FUNCION COM UM ÚNICO RETORNO - oculta as chaves e o return
const calculadora = (num1, operador, num2) =>
  eval(`${num1} ${operador} ${num2}`);
document.write(
  `<p>O resultado da operação é ${calculadora(1100, "+", 1)}.</p>`
);

// IIFE - Função imediata (Immediately invoked function expression) - precisa estar em parenteses
const iife = (function () {
  document.write("<p>Estou sendo executada imediatamente!</p>");
})();

// IIFE - Função imediata (Immediately invoked function expression) com parâmetro
const loadUser = (function (user) {
  document.write(
    `<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`
  );
})("Geovanna"); // aqui é passado o parâmetro
