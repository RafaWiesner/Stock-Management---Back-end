import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Importa a conexão com o banco

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Auto incremento
        primaryKey: true, // Chave primária
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: true // Cria automaticamente createdAt e updatedAt
});

export default Product;
