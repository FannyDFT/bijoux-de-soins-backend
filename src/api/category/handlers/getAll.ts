import prisma from "../../../../prisma/client";
import CategoryController from "../interface";

const getAllCategories: CategoryController["getAll"] = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch categories." });
  }
};

export default getAllCategories;
