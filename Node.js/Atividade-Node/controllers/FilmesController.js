import express from "express";
import Filme from "../models/Filme.js";
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

router.get("/filmes", function (req, res) {
  Filme.findAll()
    .then((filmes) => {
      res.render("filmes", {
        filmes: filmes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/filmes/new", upload.single('file'), (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  Filme.create({
    titulo: titulo,
    genero: genero,
    file: req.file.filename,
  })
    .then(() => {
      res.redirect("/filmes");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/filmes/delete/:id", (req, res) => {
  const id = req.params.id;
  Filme.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/filmes");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/filmes/edit/:id", (req, res) => {
  const id = req.params.id;
  Filme.findByPk(id).then(function (filme) {
    res.render("filmeEdit", {
      filme: filme,
    });
  }).catch((err) => {
    console.log(err);
  });
});

router.post("/filmes/update/:id", (req, res) => {
  const id = req.body.id;
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  Filme.update(
    {
      titulo: titulo,
      genero: genero,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/filmes");
  }).catch((err) => {
    console.log(err);
  });
});


export default router;