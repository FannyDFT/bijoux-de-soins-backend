import prisma from "../../../../prisma/client";
import UserController from "../interface";

const createUser: UserController["create"] = async (req, res) => {
  const { firstname, lastname, email, password, phone } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
        phone,
      },
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createUser;
