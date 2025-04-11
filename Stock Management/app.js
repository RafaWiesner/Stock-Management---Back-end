import express from "express"
import cors from "cors"
import productRoutes from "./src/routes/productRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"

import { configDotenv } from 'dotenv'; // Importa o método configDotenv
configDotenv(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 10000;

app.use(express.json()); // Permite que o Express entenda JSON nas requisições
app.use(cors({
  origin: "https://stock-management-front-end-ruby.vercel.app",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})