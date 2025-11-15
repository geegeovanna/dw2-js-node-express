import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Serie = connection.define("series", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  file:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Serie.sync({ force: false });

export default Serie;