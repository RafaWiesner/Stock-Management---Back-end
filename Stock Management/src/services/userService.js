import User from "../models/User.js";

const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("E-mail já cadastrado.");
  }

  const newUser = await User.create({ name, email, password });
  return newUser;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    throw new Error("E-mail ou senha inválidos.");
  }
  
  return user;
};

export default {
  registerUser,
  loginUser,
};
