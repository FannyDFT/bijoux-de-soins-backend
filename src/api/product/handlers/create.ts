import prisma from "../../../../prisma/client";
import ProductController from "../interface";

const createProduct: ProductController["create"] = async (req, res) => {
  const { name, description, price, image, categoryId } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
        categoryId,
      },
    });
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res
      .status(200)
      .json({
        message: "Une erreur est survenue lors de la création du produit.",
      });
  }
};

export default createProduct;
