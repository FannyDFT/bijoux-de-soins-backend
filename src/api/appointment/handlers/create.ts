import prisma from "../../../../prisma/client";
import AppointmentController from "../interface";

const createCategory: AppointmentController["create"] = async (req, res) => {
  const { serviceId, userId } = req.body;

  try {
    const newAppointment = await prisma.appointment.create({
      data: {
        service: { connect: { id: serviceId } },
        user: { connect: { id: userId } },
      },
    });
    res.status(200).json(newAppointment);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default createCategory;
