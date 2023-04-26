import CategoryController from "../interface";
import prisma from "../../../../prisma/client";

const createCategory: CategoryController["create"] = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
    res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createCategory;
