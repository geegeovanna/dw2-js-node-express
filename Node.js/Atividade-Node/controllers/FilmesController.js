import express from "express";
import Filme from "../models/Filme.js";
const router = express.Router();

// router.get("/filmes", (req, res) => {
//   const filmes = [
//     { imagem: "/imgs/imagem4.jpg", titulo: "Cinderela", genero: "Animação" },
//     { imagem: "/imgs/imagem16.jpg", titulo: "Harry Potter e o Prisioneiro de Azkaban", genero: "Fantasia" },
//     { imagem: "/imgs/imagem6.jpg", titulo: "O menino que descobriu o vento", genero: "Drama" },
//     { imagem: "/imgs/imagem5.jpg", titulo: "Paranóia", genero: "Suspense" },
//     { imagem: "/imgs/imagem3.jpg", titulo: "Piratas do caribe", genero: "Fantasia" },
//   ];
//   res.render("filmes", {
//     filmes: filmes,
//   });
// });

router.get("/filmes", function (req, res) {
  // Busca apenas os filmes
  Filme.findAll()
    .then((filmes) => {
      res.render("filmes", {
        filmes: filmes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// ROTA DE CADASTRO DE filmes
router.post("/filmes/new", (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  Filme.create({
    titulo: titulo,
    genero: genero,
  })
    .then(() => {
      res.redirect("/filmes");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/filmes/delete/:id", (req, res) => {
  const id = req.params.id;
  Filme.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/filmes");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EDIÇÃO DE Filmes
router.get("/filmes/edit/:id", (req, res) => {
  const id = req.params.id;
  Filme.findByPk(id).then(function (filme) {
    res.render("filmeEdit", {
      filme: filme,
    });
  }).catch((err) => {
    console.log(err);
  });
});

// ROTA DE ALTERAÇÃO DE Filmes
router.post("/filmes/update/:id", (req, res) => {
  const id = req.body.id;
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  Filme.update(
    {
      titulo: titulo,
      genero: genero,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/filmes");
  }).catch((err) => {
    console.log(err);
  });
});


export default router;