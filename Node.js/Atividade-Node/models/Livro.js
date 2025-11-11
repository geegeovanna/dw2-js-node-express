import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Livro = connection.define("livros", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  autor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});

//Livro.sync({ force: false });

export default Livro;