import User from "../../model/User";

export default async function handler(req, res) {
  const data = req.body;
  const { email } = data;

  const user = await User.findOneAndUpdate({ email }, { ...data });

  res
    .status(200)
    .json({ success: true, message: "Profile update successfully" });
}
