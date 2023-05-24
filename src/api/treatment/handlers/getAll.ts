import prisma from "../../../../prisma/client";
import ServiceController from "../interface";

const getAllServices: ServiceController["getAll"] = async (req, res) => {
  try {
    const { categoryId } = req.query; // Récupérer la valeur de categoryId depuis req.query
    let services;

    if (categoryId) {
      services = await prisma.service.findMany({
        where: {
          categoryId: categoryId,
        },
      });
    } else {
      services = await prisma.service.findMany();
    }

    res.status(200).json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllServices;
