import express from "express";
import Livro from "../models/Livro.js";
import multer from "multer";
import path from 'path';
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads"); 
    },
    filename: (req, file, cb) => {
        const extensao = path.extname(file.originalname);
        
        const nomeArquivoBase = path.basename(file.originalname, extensao).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '');

        const nomeFinalImagem = `${nomeArquivoBase}-${Date.now()}${extensao}`;
        
        cb(null, nomeFinalImagem);
    }
});

const upload = multer({ storage: storage });

router.get("/livros", function (req, res) {
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

router.post("/livros/new", upload.single('file'), (req, res) => {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const genero = req.body.genero;

  Livro.create({
    titulo: titulo,
    autor: autor,
    genero: genero,
    file: req.file.filename,
  })
    .then(() => {
      res.redirect("/livros");
    })
    .catch((err) => {
      console.log(err);
    });
});

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