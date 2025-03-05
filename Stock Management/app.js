import express from "express"
import cors from "cors";
import productRoutes from "./src/routes/productRoutes.js"

import { configDotenv } from 'dotenv'; // Importa o método configDotenv
configDotenv(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Permite que o Express entenda JSON nas requisições
app.use(cors({
  origin: "http://localhost:5173" // Altere para a URL do seu frontend
}));

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
