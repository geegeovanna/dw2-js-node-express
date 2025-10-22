import express from "express";
const router = express.Router();
import Produto from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
    })
    .catch((error) => {
      console.log(error);
    });
});

// rota de cadastro de produtos
router.post("/produtos/new", (req, res) => {
  // Coletando os dados do formulário
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    // coluna : dado do form
    nome: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de produtos
// :id é um parâmetro obrigatótio
router.get("/produtos/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> excluir um registro do banco
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de produtos
router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id;

  // Buscando o produto pelo ID
  // findByPk() - > busca um registro pela chave primária
  Produto.findByPk(id).then((produto) => {
    res.render("produtoEdit", {
      produto: produto,
    });
  });
});

// Rota de alteração de produtos
router.post("/produtos/update", (req, res) => {
  //COLETANDO DADOS DO FORMULÁRIO
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.update(
    {
      nome: nome,
      preco: preco,
      categoria: categoria,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
