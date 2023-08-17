import prisma from "../../../../prisma/client";
import CategoryController from "../interface";

const createCategory: CategoryController["create"] = async (req, res) => {
  const { name, description, image, type } = req.body;

  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
        description,
        image,
        type,
      },
    });
    res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default createCategory;
