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
});

export default router;
