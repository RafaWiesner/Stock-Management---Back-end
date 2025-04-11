// models/Product.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js"; // Importa o model de usuário

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
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
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true // null = produto da tabela geral
  }
}, {
  timestamps: true
});

Product.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Product, { foreignKey: "userId", as: "products" });

export default Product;
