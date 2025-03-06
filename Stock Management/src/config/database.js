import { Sequelize } from "sequelize";
import dotenv from "dotenv"; // Importando o dotenv

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Criação da instância do Sequelize usando as variáveis do .env
const sequelize = new Sequelize(
    process.env.DB_NAME,      // Nome do banco de dados (definido no .env)
    process.env.DB_USER,      // Usuário do banco de dados (definido no .env)
    process.env.DB_PASSWORD,  // Senha do banco de dados (definido no .env)
    {
        host: process.env.DB_HOST,  // Host do banco de dados (definido no .env)
        dialect: "postgres", // Agora usa a variável DB_DIALECT do .env
        port: process.env.DB_PORT,  // Porta do banco de dados (geralmente 5432 para PostgreSQL)
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // Necessário para conexão segura com o Supabase
            },
        },
        logging: false,             // Desativa os logs SQL (opcional)
    }
);

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
