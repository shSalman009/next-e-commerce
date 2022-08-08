// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import Product from "../../model/Product";

const handler = async (req, res) => {
  const products = await Product.find();
  const tShirts = {};
  for (let item of products) {
    if (item.title in tShirts) {
      if (
        !tShirts[item.title].color.includes(item.color) &&
        item.availibleQty > 0
      ) {
        tShirts[item.title].color.push(item.color);
      }
      if (
        !tShirts[item.title].size.includes(item.size) &&
        item.availibleQty > 0
      ) {
        tShirts[item.title].size.push(item.size);
      }
    } else {
      tShirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availibleQty > 0) {
        tShirts[item.title].color = [item.color];
        tShirts[item.title].size = [item.size];
      }
    }
  }

  res.status(200).json({ tShirts });
};

export default connectDb(handler);
