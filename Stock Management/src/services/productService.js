import Product from "../models/Product.js"
import { Op } from "sequelize";

const getAllProducts = async (userId) => {
    try {
      const whereClause = userId
        ? { userId } 
        : { userId: { [Op.is]: null } };
      const products = await Product.findAll({ where: whereClause });
      return products;
    } catch (error) {
      console.error("Erro no service getAllProducts:", error); 
      throw new Error("Erro ao buscar os produtos");
    }
  };

const createProduct = async (productData) => {
    try {
        const newProduct = await Product.create(productData); 
        return newProduct;
    } catch (error) {
        throw new Error('Erro ao criar o produto');
    }
}

const updateProduct = async (id, productData) => {
    try {
        const product = await Product.findByPk(id); 
        if (!product) return null; 

        await product.update(productData);
        return product; 
    } catch (error) {
        throw new Error('Erro ao atualizar o produto');
    }
}

const deleteProduct = async (id) => {
    try {
        const product = await Product.findByPk(id);
        if (!product) return null; 

        await product.destroy();
        return product;
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