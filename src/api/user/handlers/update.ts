import prisma from "../../../../prisma/client";
import UserController from "../interface";

const updateUser: UserController["update"] = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email, password, phone } = req.body;
  try {
    const users = await prisma.user.update({
      where: { id },
      data: {
        firstname,
        lastname,
        email,
        password,
        phone,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateUser;
