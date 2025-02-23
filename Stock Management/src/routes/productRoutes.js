import express from "express"
import productController from "./controllers/productController.js"

const router = express.Router();

// Rota para listar todos os produtos (GET)
router.get('/products', productController.getAllProducts)

//Rota para adicionar um novo produto (POST)
router.post('/products', productController.createProduct)

//Rota para atualizar um produto
router.patch('/products/:id', productController.updateProduct)

//Rota para deletar um produto
router.delete('/products/:id', productController.deleteProduct)

export default router;