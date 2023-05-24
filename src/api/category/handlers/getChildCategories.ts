import CategoryController from "../interface";
import prisma from "../../../../prisma/client";

const getChildCategories: CategoryController["getChildCategories"] = async (
  req,
  res,
) => {
  const { parentId } = req.params;

  try {
    const childCategories = await prisma.category.findMany({
      where: {
        parentId: parentId,
      },
    });

    res.status(200).json(childCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch child categories." });
  }
};

export default getChildCategories;
