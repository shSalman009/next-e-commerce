import Order from "../../model/Order";

export default async function handler(req, res) {
  const { data } = req.body;

  const order = await new Order({
    email: data.email,
    orderId: "dfsd90spadfausdf",
    address: data.street,
    amount: 100,
  });
  await order.save();

  res.status(200).json({ message: "success" });
}
