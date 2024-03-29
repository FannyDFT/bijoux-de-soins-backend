import prisma from "../../../../prisma/client";
import CategoryController from "../interface";

const updateCategory: CategoryController["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;

  try {
    const updatedCategory = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        image,
      },
    });
    res.status(204).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update category." });
  }
};

export default updateCategory;
