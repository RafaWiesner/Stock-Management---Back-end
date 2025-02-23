const updateProduct = async (id, productData) => {
    try {
        const product = await Product.findByPk(id); // Encontra o produto pelo ID
        if (!product) return null; // Caso o produto não exista

        // Atualiza os dados do produto
        await product.update(productData);
        return product; // Retorna o produto atualizado
    } catch (error) {
        throw new Error('Erro ao atualizar o produto');
    }
}

const deleteProduct = async (id) => {
    try {
        const product = await Product.findByPk(id); // Encontra o produto pelo ID
        if (!product) return null; // Caso o produto não exista

        // Deleta o produto
        await product.destroy();
        return product; // Retorna o produto deletado
    } catch (error) {
        throw new Error('Erro ao deletar o produto');
    }
}


module.exports = {
    updateProduct,
    deleteProduct
}