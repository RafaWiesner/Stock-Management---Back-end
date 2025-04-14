import productService from "../services/productService.js"

const getAllProducts = async (req, res) => {
    const userId = req.query.userId ? Number(req.query.userId) : null;
    try {
      const products = await productService.getAllProducts(userId);
      res.status(200).json(products);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      res.status(500).json({ message: "Erro ao buscar os produtos." });
    }
  };

const createProduct = async (req,res) => {
    try {
        const newProduct = await productService.createProduct(req.body)
        res.status(201).json(newProduct); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o produto.' });
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id; 
    try {
        const updatedProduct = await productService.updateProduct(id, req.body) 
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Produto não encontrado.' }); 
        }
        res.status(200).json(updatedProduct); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o produto.' });
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id; 
    try {
        const deletedProduct = await productService.deleteProduct(id)
        if(!deletedProduct) {
            return res.status(404).json({message: 'Produto não encontrado'}) 
        }
        res.status(200).json({message: 'Produto deletado com sucesso'}); 
    } catch (error) {
        res.status(500).json({message:'Erro ao deletar o produto.' });
    }
}

export default {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};