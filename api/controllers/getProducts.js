export const getProducts = async (req, res) => {
  res.status(200).json({ message: "Here are your products!" });
};

export const getProductsTools = async (req, res) => {
  res.status(200).json({ message: "Here are your tools!" });
};
