import express from "express";
import Serie from "../models/Serie.js";
const router = express.Router();

// router.get("/series", (req, res) => {
//   const series = [
//     { imagem:"/imgs/imagem14.jpg", titulo: "Alice in borderland", genero: "Drama" },
//     { imagem:"/imgs/imagem11.jpg", titulo: "Bridgerton", genero: "Romance" },
//     { imagem:"/imgs/imagem12.jpeg", titulo: "Game of Thrones", genero: "Drama" },
//     { imagem:"/imgs/imagem13.jpg", titulo: "House of the dragon", genero: "Drama" },
//     { imagem:"/imgs/imagem17.jpeg", titulo: "The Witcher", genero: "Drama" },
//   ];
//   res.render("series", {
//     series: series,
//   });
// });

router.get("/series", function (req, res) {
  // Busca apenas os series
  Serie.findAll()
    .then((series) => {
      res.render("series", {
        series: series,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// ROTA DE CADASTRO DE series
router.post("/series/new", (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  Serie.create({
    titulo: titulo,
    genero: genero,
  })
    .then(() => {
      res.redirect("/series");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/series/delete/:id", (req, res) => {
  const id = req.params.id;
  Serie.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/series");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EDIÇÃO DE Filmes
router.get("/series/edit/:id", (req, res) => {
  const id = req.params.id;
  Serie.findByPk(id).then(function (serie) {
    res.render("serieEdit", {
      serie: serie,
    });
  }).catch((err) => {
    console.log(err);
  });
});

// ROTA DE ALTERAÇÃO DE Filmes
router.post("/series/update/:id", (req, res) => {
  const id = req.body.id;
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  Serie.update(
    {
      titulo: titulo,
      genero: genero,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/series");
  }).catch((err) => {
    console.log(err);
  });
});

export default router;