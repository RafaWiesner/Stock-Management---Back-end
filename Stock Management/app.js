import express from "express"
import cors from "cors"
import productRoutes from "./src/routes/productRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import "./src/config/database.js"

import { configDotenv } from 'dotenv'; 
configDotenv(); 

const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());
app.use(cors({
  origin: "https://stock-management-front-end-ruby.vercel.app",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})