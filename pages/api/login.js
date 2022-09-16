// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import User from "../../model/User";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

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

    const user = await User.findOne({ email: data.email });

    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, "secret key 123");
      const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

      if (user.email === data.email && decryptedPassword === data.password) {
        const token = jwt.sign(
          { email: user.email, name: user.name },
          "secret"
        );

        res
          .status(200)
          .json({ success: true, message: "User login successfully", token });
      } else {
        res
          .status(400)
          .json({ error: true, message: "User information is not correct" });
      }
    } else {
      res.status(404).json({ error: true, message: "User not defined" });
    }
  } else {
    res
      .status(405)
      .json({ error: true, message: "Request method is not valid" });
  }
};

export default connectDb(handler);
