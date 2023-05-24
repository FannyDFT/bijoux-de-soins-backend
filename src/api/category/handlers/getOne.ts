import prisma from "../../../../prisma/client";
import CategoryController from "../interface";

const getOneCategory: CategoryController["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Failed to fetch category." });
  }
};

export default getOneCategory;
