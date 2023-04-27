import prisma from "../../../../prisma/client";
import ServiceController from "../interface";

const getAllServices: ServiceController["getAll"] = async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.status(200).json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllServices;
