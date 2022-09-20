import connectDb from "../../middleware/mongoose";
import Order from "../../model/Order";
import Product from "../../model/Product";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

async function handler(req, res) {
  const { data } = req.body;

  const { email, orderId, total, street, city, country, cart } = data;
  const address = `${street}, ${city}, ${country}`;

  if (Object.keys(cart).length == 0) {
    return res.status(400).json({
      success: false,
      message: "Cart is empty",
    });
  }

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  let subTotal = 0;
  let product;

  for (let item in cart) {
    subTotal += cart[item].price * cart[item].qty;
    product = await Product.findOne({ slug: item });

    if (product.availibleQty < cart[item].qty) {
      return res.status(400).json({
        success: false,
        message: "Sorry! Some of Item is Out of Stock",
      });
    }

    if (product.price !== cart[item].price) {
      return res
        .status(400)
        .json({ success: false, message: "Item price not correct" });
    }
  }

  if (subTotal !== total) {
    return res
      .status(200)
      .json({ success: false, message: "Products price not correct" });
  }

  const v = await Order.find({ orderId });

  if (v && v.length === 0) {
    const order = await new Order({
      email,
      orderId,
      products: cart,
      address,
      amount: total,
      status: "pending",
    });
    await order.save();
  }

  res
    .status(200)
    .json({ success: true, clientSecret: paymentIntent.client_secret });
}

export default connectDb(handler);
