import connectDb from "../../middleware/mongoose";
import User from "../../model/User";

async function handler(req, res) {
  const email = req.body;

  const user = await User.findOne({ email: email });

  res.status(200).json({ user });
}

export default connectDb(handler);
