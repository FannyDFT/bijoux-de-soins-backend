// import prisma from "../../../../prisma/client";
// import ProductController from "../interface";

// const updateProduct: ProductController["update"] = async (req, res) => {
//   const { id } = req.params;
//   const { brand, name, description, price, image } = req.body;

//   try {
//     const updatedProduct = await prisma.product.update({
//       where: {
//         id,
//       },
//       data: {
//         brand,
//         name,
//         description,
//         price,
//         image,
//       },
//     });
//     res.status(204).json(updatedProduct);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error });
//   }
// };

// export default updateProduct;
