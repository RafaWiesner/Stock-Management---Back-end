import sequelize from "./sequelizeInstance.js";
import "../models/index.js"; // só importa os models DEPOIS de ter o sequelize pronto

sequelize.authenticate()
  .then(() => {
    console.log("Conectado ao banco de dados");
    return sequelize.sync({ alter: true });
  })
  .then(() => console.log("Banco de dados sincronizado com sucesso!"))
  .catch(err => console.error("Erro ao conectar/sincronizar com o banco de dados:", err));

export default sequelize;
