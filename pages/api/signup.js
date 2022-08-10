// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
      "secret key 123"
    ).toString();

    const u = new User({ name, email, password: encryptedPassword });
    await u.save();

    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "error occured" });
  }
};

export default connectDb(handler);
