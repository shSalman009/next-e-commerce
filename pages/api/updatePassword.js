var CryptoJS = require("crypto-js");
import User from "../../model/User";

export default async function handler(req, res) {
  const { user, password } = req.body;

  //   decrypting current password
  const bytes = CryptoJS.AES.decrypt(
    user.password,
    process.env.NEXT_CRYPTO_SECRET
  );
  const pass = bytes.toString(CryptoJS.enc.Utf8);

  if (password.currentPassword !== pass) {
    return res
      .status(400)
      .json({ success: false, message: "Enter correct password" });
  }

  //   encrypting new password
  const encpass = CryptoJS.AES.encrypt(
    password.newPassword,
    process.env.NEXT_CRYPTO_SECRET
  ).toString();

  //   updatin user password
  await User.findOneAndUpdate({ email: user.email }, { password: encpass });

  await res
    .status(200)
    .json({ success: true, message: "Your Password is changed" });
}
