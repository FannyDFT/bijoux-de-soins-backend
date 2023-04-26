import prisma from "../../../../prisma/client";
import AppointmentController from "../interface";

const getOneAppointment: AppointmentController["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await prisma.appointment.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(appointment);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default getOneAppointment;
