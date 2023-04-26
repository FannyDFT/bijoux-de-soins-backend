import prisma from "../../../../prisma/client";
import CategoryController from "../interface";

const deleteCategory: CategoryController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ message: `Category "${category.name}" deleted successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteCategory;
