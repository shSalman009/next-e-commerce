import connectDb from "../../middleware/mongoose";
import Order from "../../model/Order";

async function handler(req, res) {
  const { orderId } = req.body;

  const order = await Order.findOneAndUpdate({ orderId }, { status: "paid" });
  await order.save();

  res.status(200).json({ id: order._id });
}

export default connectDb(handler);
