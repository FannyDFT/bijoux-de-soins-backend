import prisma from "../../../../prisma/client";
import ProductController from "../interface";

const getOneProduct: ProductController["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findFirstOrThrow({
      where: { id },
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default getOneProduct;
