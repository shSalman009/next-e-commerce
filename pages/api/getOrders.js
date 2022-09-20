import jsonwebtoken from "jsonwebtoken";
import Order from "../../model/Order";

export default async function handler(req, res) {
  const { token } = req.body;

  const data = jsonwebtoken.verify(token, "secret");

  const orders = await Order.find({ email: data.email });
  res.status(200).json({ orders });
}
