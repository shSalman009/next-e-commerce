import connectDb from "../../middleware/mongoose";
import Order from "../../model/Order";
import Product from "../../model/Product";

//  FALSE ID SAVING IN ORDER

async function handler(req, res) {
  const { orderData } = req.body;
  const { orderId, cart } = orderData;

  const order = await Order.findOneAndUpdate({ orderId }, { status: "paid" });
  await order.save();

  for (let item in cart) {
    await Product.findOneAndUpdate(
      { slug: item },
      { $inc: { availibleQty: -cart[item].qty } }
    );
  }

  res.status(200).json({ id: order._id });
}

export default connectDb(handler);
