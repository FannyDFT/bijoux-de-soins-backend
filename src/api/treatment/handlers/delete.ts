import prisma from "../../../../prisma/client";
import ServiceController from "../interface";

const deleteService: ServiceController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedService = await prisma.service.delete({
      where: { id },
    });
    res
      .status(200)
      .json({ message: `Service ${deletedService.name} has been deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteService;
