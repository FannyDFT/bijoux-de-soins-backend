// import prisma from "../../../../prisma/client";
// import ServiceController from "../interface";

// const getOneService: ServiceController["getOne"] = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const service = await prisma.service.findFirstOrThrow({
//       where: { id },
//     });
//     res.status(200).json(service);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error });
//   }
// };

// export default getOneService;
