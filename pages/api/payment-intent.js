import connectDb from "../../middleware/mongoose";
import Order from "../../model/Order";
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

async function handler(req, res) {
  const { data } = req.body;

  const { email, orderId, total, street, city, country, products } = data;
  const address = `${street}, ${city}, ${country}`;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const v = await Order.find({ orderId });

  if (v && v.length === 0) {
    const order = await new Order({
      email,
      orderId,
      products,
      address,
      amount: total,
      status: "pending",
    });
    await order.save();
  }

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}

export default connectDb(handler);
