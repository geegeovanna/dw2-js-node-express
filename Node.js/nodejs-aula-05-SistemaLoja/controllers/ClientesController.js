import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //SEÇECT * FROM Clientes
  Cliente.findAll().then((clientes) => {
  res.render("clientes", {
    clientes: clientes,
  });
  })
});

export default router;
