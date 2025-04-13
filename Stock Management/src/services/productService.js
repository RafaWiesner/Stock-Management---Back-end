import Product from "../models/Product.js"
import { Op } from "sequelize";


const getAllProducts = async (userId) => {
    try {
      const whereClause = userId
        ? { userId } // exibe produtos do usuário
        : { userId: { [Op.is]: null } }; // exibe produtos "públicos"
  
      const products = await Product.findAll({ where: whereClause });
      return products;
    } catch (error) {
      console.error("Erro no service getAllProducts:", error); // mostre o erro real
      throw new Error("Erro ao buscar os produtos");
    }
  };

const createProduct = async (productData) => {
    try {
        const newProduct = await Product.create(productData); // Cria e salva o produto no banco
        return newProduct;
    } catch (error) {
        throw new Error('Erro ao criar o produto');
    }
}

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


export default {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};