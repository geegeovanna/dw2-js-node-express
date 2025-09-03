// Tarefa - 1

const listaClientes = [
  {
    nome: "Geovanna",
    endereco: "Rua dos expedicionarios, 123, Jacupiranga-SP",
    cpf: 54687433754,
  },
  {
    nome: "Maria",
    endereco: "Rua das flores, 456, Cajati-SP",
    cpf: 89735463718,
  },
  {
    nome: "Lucas",
    endereco: "Rua dos girassóis, 789, Registro-SP",
    cpf: 45387291876,
  },
];

// Tarefa - 2

listaClientes.forEach((cliente) => {
  document.write(`
    Nome: ${cliente.nome}, <br>
    Endereço: ${cliente.endereco}, <br>
    CPF: ${cliente.cpf} <br><br>
    `);
});

document.write(`<hr>`);

// Tarefa - 3

listaClientes.push({
  nome: "Carol",
  endereco: "Av. Paulista, 634, São Paulo-SP",
  cpf: 36534534,
});

listaClientes.forEach((cliente) => {
  document.write(`
    Nome: ${cliente.nome}, <br>
    Endereço: ${cliente.endereco}, <br>
    CPF: ${cliente.cpf} <br><br>
    `);
});

document.write(`<hr>`);

// Tarefa - 4

listaClientes.unshift({
  nome: "Ana",
  endereco: "Rua dos Anjos, 423, Cajati-SP",
  cpf: 36534534,
});

listaClientes.forEach((cliente) => {
  document.write(`
    Nome: ${cliente.nome}, <br>
    Endereço: ${cliente.endereco}, <br>
    CPF: ${cliente.cpf} <br><br>
    `);
});
