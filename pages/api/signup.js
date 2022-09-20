var CryptoJS = require("crypto-js");
import connectDb from "../../middleware/mongoose";
import User from "../../model/User";

function isValidJSONString(data) {
  try {
    JSON.parse(data);
  } catch (e) {
    return data;
  }
  return JSON.parse(data);
}

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = isValidJSONString(req.body);

    const { name, email, password } = data;
    var encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.NEXT_CRYPTO_SECRET
    ).toString();

    try {
      const u = await new User({ name, email, password: encryptedPassword });
      await u.save();

      res
        .status(200)
        .json({ success: true, message: "User create successfully" });
    } catch (error) {
      if (error.message.includes("duplicate key error collection")) {
        res
          .status(400)
          .json({ error: true, message: "This email is already used" });
      } else {
        res
          .status(400)
          .json({ error: true, message: "Something wrong happen!" });
      }
    }
  } else {
    res.status(405).json({ error: "error occured" });
  }
};

export default connectDb(handler);
