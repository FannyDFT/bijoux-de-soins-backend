import prisma from "../../../../prisma/client";
import CategoryController from "../interface";

const getAllCategories: CategoryController["getAll"] = async (req, res) => {
  const { type } = req.query;

  try {
    let categories;

    if (type === "PRODUCT") {
      categories = await prisma.category.findMany({
        where: {
          type: "PRODUCT",
        },
      });
    } else if (type === "SERVICE") {
      categories = await prisma.category.findMany({
        where: {
          type: "SERVICE",
        },
      });
    } else {
      categories = await prisma.category.findMany(); // Si aucun type spécifié, récupère toutes les catégories
    }

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération des catégories.",
    });
  }
};

export default getAllCategories;
