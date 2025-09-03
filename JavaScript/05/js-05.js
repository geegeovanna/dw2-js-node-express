// Manipulação de datas

document.write("<h3>Manipulando datas:</h3>");

// Criar uma instância da classe Date() do JavaScript

const dataAtual = new Date();
document.write(dataAtual);

// Pegando o dia atual:

const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia} </p>`);

// Pegando o mês atual:

const mes = dataAtual.getMonth();
document.write(`<p>Estamos no mês: ${mes + 1}</p>`);

// Pegando o ano atual:

const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano: ${ano}</p>`);

// Pegando o dia da semana:

const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da Semana: ${diaSemana + 1}</p>`);

// Adicionando Dias, Meses e Anos à data atual
// Adicionando 4 anos ao ano atual

dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);

// Adicionando meses

dataAtual.setMonth(dataAtual.getMonth() + 3);
document.write(`<p>Daqui a 3 meses será: ${dataAtual.getMonth()}</p>`);

// Adicionando dias

dataAtual.setDate(dataAtual.getDate() + 10);
document.write(`<p>Daqui a 10 dias será: ${dataAtual.getDate()}</p>`);

// Formatação de moedas
// Real

document.write(`<h3>Formatação de moedas:</h3>`);

const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`);

// Dólar

const salarioDolar = salario.toLocaleString("en", {
  style: "currency",
  currency: "USD",
});
const salarioConvertido = salario * 0.176;
document.write(`<p>Salário em dolar: ${salarioDolar}.</p>`);

document.write(
  `<p>Salário em valor de dolar: ${salarioConvertido.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}.</p>`
);

// currency: EUR -> Euro

// Formatação de string (textos)

document.write("<h3>Formatação de Strings:</h3>");
const nome = "Geovanna Silva";

// Alternando para letras maiúsculas - toUpperCase()

document.write(`<p>nome em maiúsculas: ${nome.toUpperCase()}</p>`);

// Alternando para letras minúsculas - toLowerCase()

document.write(`<p>nome em minúsculas: ${nome.toLowerCase()}</p>`);

// Removendo espaços da string

const novoNome = nome.replace(/\s/g, "");

// Contando caracteres de uma string - .length

document.write(`<p>Esse nome tem: ${novoNome.length}</p>`);