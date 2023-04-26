import prisma from "../../../../prisma/client";
import ServiceController from "../interface";

const updateService: ServiceController["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, duration, image } = req.body;
  try {
    const updatedService = await prisma.service.update({
      where: { id },
      data: {
        name,
        description,
        price,
        duration,
        image,
      },
    });
    res.status(200).json(updatedService);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateService;
