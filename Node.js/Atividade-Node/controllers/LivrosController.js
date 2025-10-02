import express from "express";

const router = express.Router();

router.get("/livros", (req, res) => {
  const livros = [
    { imagem: "/imgs/imagem10.jpg", titulo: "A Empregada", autor: "Freida McFadden", genero:"Suspense"},
    { imagem: "/imgs/imagem7.jpg", titulo: "A hipótese do amor", autor: "Ali Hazelwood", genero: "Romance"},
    { imagem: "/imgs/imagem9.jpg", titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Mass", genero:"Fantasia romântica"},
    { imagem: "/imgs/imagem15.jpg", titulo: "Império de Tempestades", autor: "Sarah J. Mass", genero:"Fantasia Épica"},
    { imagem: "/imgs/imagem8.jpg", titulo: "Quarta Asa", autor: "Rebecca Yarros", genero: "Fantasia romântica"},
  ];
  res.render("livros", {
    livros: livros,
  });
});

export default router;