import prisma from "../../../../prisma/client";
import ProductController from "../interface";

const getAllProducts: ProductController["getAll"] = async (req, res) => {
  try {
    const { categoryId } = req.query;
    let products;

    if (categoryId) {
      products = await prisma.product.findMany({
        where: {
          categories: {
            some: {
              id: categoryId,
            },
          },
        },
      });
    } else {
      products = await prisma.product.findMany();
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllProducts;
