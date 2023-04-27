import prisma from "../../../../prisma/client";
import AppointmentController from "../interface";

const deleteAppointment: AppointmentController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await prisma.appointment.delete({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({
        message: `appointment "${appointment.name}" deleted successfully`,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteAppointment;
