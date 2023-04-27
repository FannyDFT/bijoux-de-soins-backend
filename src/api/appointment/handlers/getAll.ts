import prisma from "../../../../prisma/client";
import AppointmentController from "../interface";

const getAllAppointments: AppointmentController["getAll"] = async (
  req,
  res,
) => {
  try {
    const appointments = await prisma.appointment.findMany();

    res.status(200).json(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllAppointments;
