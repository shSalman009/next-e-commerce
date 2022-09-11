import connectDb from "../../middleware/mongoose";
import Order from "../../model/Order";

async function handler(req, res) {
  const { orderId } = req.body;

  const order = await Order.findOneAndUpdate({ orderId }, { status: "paid" });
  await order.save();

  await res.status(200).json({ message: "success" });
}

export default connectDb(handler);
