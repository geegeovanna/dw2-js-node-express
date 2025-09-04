// Data atual

const dataAtual = new Date();
document.write(dataAtual);

// Compra internacional - valor em dólar

const compraInternacional = 2000;

document.write(
  `<p>O valor da sua compra em dólar é ${compraInternacional.toLocaleString(
    "en",
    {
      style: "currency",
      currency: "USD",
    }
  )}.</p>`
);

// Compra internacional - valor em real

const compraInternacionalReal = compraInternacional * 5.60;

document.write(
  `<p>O valor da sua compra em real é ${compraInternacionalReal.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.</p>`
);

// Data de entrega no formato "DD/MM/AAAA"

dataAtual.setFullYear(dataAtual.getFullYear());
dataAtual.setMonth(dataAtual.getMonth());
dataAtual.setDate(dataAtual.getDate() + 12);

document.write(
  `<p>Seu pedido chegará no dia ${dataAtual.getDate()}/ ${dataAtual.getMonth()}/ ${dataAtual.getFullYear()}.</p>`
);