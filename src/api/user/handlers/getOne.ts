import prisma from "../../../../prisma/client";
import UserController from "../interface";

const getOneUser: UserController["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneUser;
