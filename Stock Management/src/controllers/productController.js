const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAll(); // Chama o serviço para obter todos os produtos
        res.status(200).json(products); // Retorna os produtos como resposta JSON
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os produtos.' });
    }
}

const createProduct = async (req,res) => {
    try {
        const newProduct = await productService.create(req.body) // Chama o serviço e passa os dados do corpo da requisição
        res.status(201).json(newProduct); // Retorna o produto criado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o produto.' });
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id; // Obtém o ID do produto a ser atualizado
    try {
        const updatedProduct = await productService.update(id, req.body) // Passa o ID e os dados do corpo para o serviço
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Produto não encontrado.' }); // Caso o produto não exista
        }
        res.status(200).json(updatedProduct); // Retorna o produto atualizado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o produto.' }); // Retorna erro caso algo falhe
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id; // Obtém o ID do produto a ser atualizado
    try {
        const deletedProduct = await productService.delete(id)
        if(!deletedProduct) {
            return res.status(404).json({message: 'Produto não encontrado'}) // Caso o produto não exista
        }
        res.status(200).json({message: 'Produto deletado com sucesso'}); // Confirma a exclusão do produto
    } catch (error) {
        res.status(500).json({message:'Erro ao deletar o produto.' }); // Retorna erro caso algo falhe
    }
}


module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}