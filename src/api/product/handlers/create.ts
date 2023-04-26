// import prisma from "../../../../prisma/client";
// import ProductController from "../interface";

// const createProduct: ProductController["create"] = async (req, res) => {
//   const { brand, name, description, price, image, categoryId } = req.body;

//   try {
//     const newProduct = await prisma.product.create({
//       data: {
//         brand,
//         name,
//         description,
//         price,
//         image,
//         categories: {
//           connect: {
//             id: categoryId,
//           },
//         },
//       },
//     });
//     res.status(200).json(newProduct);
//   } catch (error) {
//     console.log(error);
//     res.status(200).json({ message: error });
//   }
// };

// export default createProduct;
