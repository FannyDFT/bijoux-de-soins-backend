import prisma from "../../../../prisma/client";
import AppointmentController from "../interface";

const updateAppointment: AppointmentController["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, serviceId, userId } = req.body;

  try {
    const updatedAppointment = await prisma.appointment.update({
      where: {
        id,
      },
      data: {
        name,
        serviceId,
        userId,
      },
    });
    res.status(204).json(updatedAppointment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateAppointment;
