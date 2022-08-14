import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  }

  // res.status(200).json({ body: req.body });
}
