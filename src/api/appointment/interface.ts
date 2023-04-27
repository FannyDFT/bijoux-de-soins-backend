import { Appointment } from "@prisma/client";
import { RequestHandler } from "express";
import { DeleteMessage, IdParam, ResponseError } from "../../types/globalTypes";

type AppointmentBodyCreate = {
  name: string;
  serviceId: string;
  userId: string;
};

interface AppointmentController {
  getAll: RequestHandler<null, Appointment[] | ResponseError, null, null>;
  getOne: RequestHandler<IdParam, Appointment | ResponseError, null, null>;
  create: RequestHandler<
    null,
    Appointment | ResponseError,
    AppointmentBodyCreate,
    null
  >;
  update: RequestHandler<
    IdParam,
    Appointment | ResponseError,
    AppointmentBodyCreate,
    null
  >;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null, null>;
}

export default AppointmentController;
