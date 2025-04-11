import userService from "../services/userService.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await userService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export default {
  registerUser,
  loginUser,
};
