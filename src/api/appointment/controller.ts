import AppointmentController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import deleteAppointment from "./handlers/delete";

const controller: AppointmentController = {
  getAll,
  getOne,
  create,
  update,
  delete: deleteAppointment,
};

export default controller;
