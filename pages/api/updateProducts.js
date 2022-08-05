// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import Product from "../../model/Product";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = JSON.parse(req.body);

    for (let i = 0; i < data.length; i++) {
      let p = await Product.findByIdAndUpdate(data[i]._id, data[i]);

      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ error: "error occured" });
  }
};

export default connectDb(handler);
