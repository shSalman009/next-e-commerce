// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";
import User from "../../model/User";
var CryptoJS = require("crypto-js");

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

    const bytes = CryptoJS.AES.decrypt(user.password, "secret key 123");
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (user.email === data.email && decryptedPassword === data.password) {
        res.status(200).json({ status: 200, success: "successfully logined" });
      } else {
        res
          .status(400)
          .json({ status: 400, error: "User information is not correct" });
      }
    } else {
      res.status(404).json({ status: 404, error: "User not defined" });
    }
  } else {
    res.status(400).json({ status: 400, error: "Request method is not valid" });
  }
};

export default connectDb(handler);
