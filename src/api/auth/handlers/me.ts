import jwt from "jsonwebtoken";
import IAuthController from "../interface";
import getSecretKey from "../../../utils/auth";

const handler: IAuthController["me"] = (req, res) => {
  const token = req.headers["authorization"]?.slice(7);

  if (!token) {
    return res.status(500).json({ message: "No auth token provided" });
  }

  const secret = getSecretKey();

  try {
    const user = jwt.verify(token, secret);

    if (typeof user === "string") {
      throw new Error(user);
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Token verification failed" });
  }
};

export default handler;
