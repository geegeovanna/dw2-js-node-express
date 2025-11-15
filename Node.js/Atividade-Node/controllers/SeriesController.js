import express from "express";
import Serie from "../models/Serie.js";
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


router.get("/series", function (req, res) {
  Serie.findAll()
    .then((series) => {
      res.render("series", {
        series: series,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/series/new", upload.single('file'), (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  Serie.create({
    titulo: titulo,
    genero: genero,
    file: req.file.filename,
  })
    .then(() => {
      res.redirect("/series");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/series/delete/:id", (req, res) => {
  const id = req.params.id;
  Serie.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/series");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/series/edit/:id", (req, res) => {
  const id = req.params.id;
  Serie.findByPk(id).then(function (serie) {
    res.render("serieEdit", {
      serie: serie,
    });
  }).catch((err) => {
    console.log(err);
  });
});

router.post("/series/update/:id", (req, res) => {
  const id = req.body.id;
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  const file = req.body.file;
  Serie.update(
    {
      titulo: titulo,
      genero: genero,
      file: file,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/series");
  }).catch((err) => {
    console.log(err);
  });
});

export default router;