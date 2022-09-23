import connectDb from "../../middleware/mongoose";
import Product from "../../model/Product";

function isValidJSONString(data) {
  try {
    JSON.parse(data);
  } catch (e) {
    return data;
  }
  return JSON.parse(data);
}

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = isValidJSONString(req.body);

    for (let i = 0; i < data.length; i++) {
      let p = new Product({
        title: data[i].title,
        slug: data[i].slug,
        description: data[i].description,
        image: data[i].image,
        category: data[i].category,
        size: data[i].size,
        color: data[i].color,
        price: data[i].price,
        availibleQty: data[i].availibleQty,
      });
      console.log("hello");
      await p.save();

      return res
        .status(200)
        .json({ success: true, message: "Add product successfully" });
    }
  } else {
    return res.status(400).json({ error: "error occured" });
  }
};

export default connectDb(handler);
