import express from "express";

const router = express.Router();

router.get("/filmes", (req, res) => {
  const filmes = [
    { imagem: "/imgs/imagem4.jpg", titulo: "Cinderela", genero: "Animação" },
    { imagem: "/imgs/imagem16.jpg", titulo: "Harry Potter e o Prisioneiro de Azkaban", genero: "Fantasia" },
    { imagem: "/imgs/imagem6.jpg", titulo: "O menino que descobriu o vento", genero: "Drama" },
    { imagem: "/imgs/imagem5.jpg", titulo: "Paranóia", genero: "Suspense" },
    { imagem: "/imgs/imagem3.jpg", titulo: "Piratas do caribe", genero: "Fantasia" },
  ];
  res.render("filmes", {
    filmes: filmes,
  });
});

export default router;