// Importando o Express
import express from "express";

// Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router();

// ROTA DE PEDIDOS
router.get("/pedidos", (req, res) => {
  const pedidos = [
    { numero: "32", produto: "Computador", valor: 1280 },
    { numero: "54", produto: "Tablet", valor: 3200 },
    { numero: "85", produto: "Notebook", valor: 9000 },
    { numero: "100", produto: "Celular", valor: 5400 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

// Exportando o objeto router
export default router;