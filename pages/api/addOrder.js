import connectDb from "../../middleware/mongoose";
import Order from "../../model/Order";

async function handler(req, res) {
  const { data } = req.body;

  const { email, orderId, total, street, city, country } = data;
  const address = `${street}, ${city}, ${country}`;

  const order = await new Order({
    email: email,
    orderId: orderId,
    address: address,
    amount: total,
  });
  await order.save();

  await res.status(200).json({ message: "success" });
}

export default connectDb(handler);
