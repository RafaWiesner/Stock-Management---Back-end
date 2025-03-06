import { Sequelize } from "sequelize";
import { configDotenv } from 'dotenv'; // Importa o método configDotenv
configDotenv(); // Carrega as variáveis de ambiente do arquivo .env

// Criação da instância do Sequelize usando a URL de conexão do banco de dados
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Necessário para conexão segura com o Supabase
        },
    },
    logging: false,  // Desativa os logs SQL (opcional)
    native: true,    // Força o uso de IPv4, caso necessário
});

// Teste de conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log("Conectado ao banco de dados");

        // Sincroniza os modelos com o banco de dados
        return sequelize.sync({ alter: true }); // Cria/atualiza tabelas sem apagar os dados
    })
    .then(() => console.log("Banco de dados sincronizado com sucesso!"))
    .catch(err => console.error("Erro ao conectar/sincronizar com o banco de dados:", err));

export default sequelize;
