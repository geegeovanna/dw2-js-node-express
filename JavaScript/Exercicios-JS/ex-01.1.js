// Exercicio 01
const nome = "Geovanna";
function saudacaoPersonalizada(nome) {
  document.write(`<p>Olá, ${nome}! Bem-vindo(a) à Calculadora Universal!.</p>`);
}
saudacaoPersonalizada(nome);

// Exercicio 02
const num1 = 1;
const operador1 = "+";
const operador2 = "-";
const operador3 = "*";
const operador4 = "/";
const num2 = 1;
const operacaoMatematica = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
document.write(
  `<p>O resultado de ${num1} ${operador1}  ${num2} é igual a ${operacaoMatematica(
    1,
    "+",
    1
  )}</p>`
);
document.write(
  `<p>O resultado de ${num1} ${operador2}  ${num2} é igual a ${operacaoMatematica(
    1,
    "-",
    1
  )}</p>`
);
document.write(
  `<p>O resultado de ${num1} ${operador3}  ${num2} é igual a ${operacaoMatematica(
    1,
    "*",
    1
  )}</p>`
);
document.write(
  `<p>O resultado de ${num1} ${operador4}  ${num2} é igual a ${operacaoMatematica(
    1,
    "/",
    1
  )}</p>`
);

// Exercicio 03
const x = 10;
const calcularDobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do ${x} é ${calcularDobro(10)}</p>`);

// Exercicio 04
const y = 4;
const calcularMetade = (y) => {
  return y / 2;
};
document.write(`<p>A metade do número ${y} é ${calcularMetade(4)}</p>`);

// Exercicio 05
const iife = (function () {
  document.write(`Calculadora Universal pronta para uso!`);
})();
