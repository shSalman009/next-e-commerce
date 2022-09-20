import connectDb from "../../middleware/mongoose";
import Product from "../../model/Product";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = JSON.parse(req.body);

    for (let i = 0; i < data.length; i++) {
      let p = new Product({
        title: data[i].title,
        slug: data[i].slug,
        desc: data[i].desc,
        img: data[i].img,
        category: data[i].category,
        size: data[i].size,
        color: data[i].color,
        price: data[i].price,
        availibleQty: data[i].availibleQty,
      });

      await p.save();

      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ error: "error occured" });
  }
};

export default connectDb(handler);
