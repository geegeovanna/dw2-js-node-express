import express from "express";

const app = express();

import LivrosController from "./controllers/LivrosController.js";
import FilmesController from "./controllers/FilmesController.js";
import SeriesController from "./controllers/SeriesController.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", LivrosController);
app.use("/", FilmesController);
app.use("/", SeriesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perfil/:user", (req, res) => {
  const user = req.params.user;
  res.render("perfil", {
    user: user,
  });
});

const port = 3000;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
