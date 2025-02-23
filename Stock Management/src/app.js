import express from "express"
import productRoutes from "./routes/productRoutes.js"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Permite que o Express entenda JSON nas requisições

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})