import express from "express";

const router = express.Router();

router.get("/series", (req, res) => {
  const series = [
    { imagem:"/imgs/imagem14.jpg", titulo: "Alice in borderland", genero: "Drama" },
    { imagem:"/imgs/imagem11.jpg", titulo: "Bridgerton", genero: "Romance" },
    { imagem:"/imgs/imagem12.jpeg", titulo: "Game of Thrones", genero: "Drama" },
    { imagem:"/imgs/imagem13.jpg", titulo: "House of the dragon", genero: "Drama" },
    { imagem:"/imgs/imagem17.jpeg", titulo: "The Witcher", genero: "Drama" },
  ];
  res.render("series", {
    series: series,
  });
});

export default router;