import User from "../models/User.js";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ["Invalid Credentials"],
      });
    }

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({
        errors: ["Invalid User"],
      });
    }

    if (!user || !(await user.isPasswordValid(password))) {
      return res.status(401).json({ errors: ["Invalid Credentials"] });
    }

    const {id} = user;
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.json({token});
  }
}

export default new TokenController();
