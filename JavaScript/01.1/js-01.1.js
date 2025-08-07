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

function userMessage(user){
    // Essa função recebe um parâmetro
    document.write(`<h3>O que deseja fazer hoje, ${user} ? </h3>`);
    // ${} - Template Strings / Literal Strings
    // É usado para inserir variáveis dentro de Strings (aspas)
}
userMessage(user); // Argumento