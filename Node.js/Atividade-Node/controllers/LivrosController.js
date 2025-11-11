import express from "express";
import Livro from "../models/Livro.js";
const router = express.Router();

// router.get("/livros", (req, res) => {
//   const livros = [
//     { imagem: "/imgs/imagem10.jpg", titulo: "A Empregada", autor: "Freida McFadden", genero:"Suspense"},
//     { imagem: "/imgs/imagem7.jpg", titulo: "A hipótese do amor", autor: "Ali Hazelwood", genero: "Romance"},
//     { imagem: "/imgs/imagem9.jpg", titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Mass", genero:"Fantasia romântica"},
//     { imagem: "/imgs/imagem15.jpg", titulo: "Império de Tempestades", autor: "Sarah J. Mass", genero:"Fantasia Épica"},
//     { imagem: "/imgs/imagem8.jpg", titulo: "Quarta Asa", autor: "Rebecca Yarros", genero: "Fantasia romântica"},
//   ];
//   res.render("livros", {
//     livros: livros,
//   });
// });

router.get("/livros", function (req, res) {
  // Busca apenas os livros
  Livro.findAll()
    .then((livros) => {
      res.render("livros", {
        livros: livros,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// ROTA DE CADASTRO DE livros
router.post("/livros/new", (req, res) => {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const genero = req.body.genero;

  Livro.create({
    titulo: titulo,
    autor: autor,
    genero: genero,
  })
    .then(() => {
      res.redirect("/livros");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/livros/delete/:id", (req, res) => {
  const id = req.params.id;
  Livro.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/livros");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EDIÇÃO DE Filmes
router.get("/livros/edit/:id", (req, res) => {
  const id = req.params.id;
  Livro.findByPk(id).then(function (livro) {
    res.render("livroEdit", {
      livro: livro,
    });
  }).catch((err) => {
    console.log(err);
  });
});

// ROTA DE ALTERAÇÃO DE Filmes
router.post("/livros/update/:id", (req, res) => {
  const id = req.body.id;
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const genero = req.body.genero;
  Livro.update(
    {
      titulo: titulo,
      autor: autor,
      genero: genero,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/livros");
  }).catch((err) => {
    console.log(err);
  });
});


export default router;