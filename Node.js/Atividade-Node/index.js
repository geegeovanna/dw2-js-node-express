import express from "express";

const app = express();

import connection from "./config/sequelize-config.js";

import LivrosController from "./controllers/LivrosController.js";
import FilmesController from "./controllers/FilmesController.js";
import SeriesController from "./controllers/SeriesController.js";

import Filme from "./models/Filme.js";
import Livro from "./models/Livro.js";
import Serie from "./models/Serie.js";

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

  connection
  .query(`CREATE DATABASE IF NOT EXISTS bibliotecaDigital;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", LivrosController);
app.use("/", FilmesController);
app.use("/", SeriesController);

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/perfil/:user", (req, res) => {
  const user = req.params.user;
  res.render("perfil", {
    user: user,
  });
});

app.listen(3000, (erro) => {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado em http://localhost:3000 com sucesso!` );
  }
});
