import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //SEÇECT * FROM Clientes
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
      // catch -> Falha na resolução da promessa
    })
    .catch((error) => {
      console.log(error);
    });
});

// rota de cadastro de clientes
router.post("/clientes/new", (req, res) => {
  // Coletando os dados do formulário
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    // coluna : dado do form
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de cliente
// :id é um parâmetro obrigatótio
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> excluir um registro do banco
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de cliente
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  
  // Buscando o cliente pelo ID
  // findByPk() - > busca um registro pela chave primária
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente: cliente
    })
  })
  
});

export default router;
