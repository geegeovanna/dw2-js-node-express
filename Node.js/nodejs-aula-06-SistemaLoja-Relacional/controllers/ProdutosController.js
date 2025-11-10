import express from "express"
const router = express.Router();
import Cliente from "../models/Cliente.js";
import Produto from "../models/Produto.js";

// ROTA produtos
router.get("/produtos", function (req, res) {
  // Busca apenas os produtos
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
        // Remove clientes do render
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// ROTA DE CADASTRO DE produtos
router.post("/produtos/new", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/produtos/delete/:id", (req, res) => {
  const id = req.params.id;
  Produto.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
