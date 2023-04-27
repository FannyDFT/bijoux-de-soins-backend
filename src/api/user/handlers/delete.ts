import prisma from "../../../../prisma/client";
import UserController from "../interface";

const deleteUser: UserController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({ where: { id } });
    res.status(200).json({
      message: `User "${user.firstname}" "${user.lastname}" has been deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export default deleteUser;
