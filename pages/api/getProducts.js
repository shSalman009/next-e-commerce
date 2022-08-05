// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import Product from "../../model/Product";

const handler = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ products });
};

export default connectDb(handler);
