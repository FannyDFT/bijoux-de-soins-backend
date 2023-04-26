// import prisma from "../../../../prisma/client";
// import ProductController from "../interface";

// const deleteProduct: ProductController["delete"] = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await prisma.product.delete({
//       where: {
//         id,
//       },
//     });
//     res
//       .status(200)
//       .json({ message: `Product "${product.name}" deleted successfully` });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error });
//   }
// };

// export default deleteProduct;
