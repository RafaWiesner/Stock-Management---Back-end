import User from "./User.js";
import Product from "./Product.js";

// Definir as associações aqui, depois de importar os models
Product.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Product, { foreignKey: "userId", as: "products" });

export { User, Product };
