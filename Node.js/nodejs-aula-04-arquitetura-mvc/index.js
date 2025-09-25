// Importando o Express(framework)
//const express = require("express"); -> CommonJS Modules
import express from "express";

// Iniciando o Express na variável "app"
const app = express();

// Importando os controllers (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

// CONFIGURANDO O EJS
app.set("view engine", "ejs");

// Definindo a pasta public para arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas que estão nos controllers
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ - Trata a REQUISIÇÃO / RES - Trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA DE PERFIL
// :user - É um parâmetro da rota (OBRIGATÓRIO)
// :user? - É um parâmetro da rota (OPCIONAL)
// req - Requisição
// res - Resposta
app.get("/perfil/:user", (req, res) => {
  const user = req.params.user;
  res.render("perfil", {
    // Enviando variáveis para a página EJS (HTML)
    user: user,
    // variavel a ser chamada : variavel criada para guardar o nome
  });
});

// Iniciando o servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
