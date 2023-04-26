// import prisma from "../../../../prisma/client";
// import ServiceController from "../interface";

// const createService: ServiceController["create"] = async (req, res) => {
//   const { name, description, price, duration, image } = req.body;
//   try {
//     const newService = await prisma.service.create({
//       data: {
//         name,
//         description,
//         price,
//         duration,
//         image,
//       },
//     });
//     res.status(200).json(newService);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error });
//   }
// };

// export default createService;
