import { RequestHandler } from "express";
import { DeleteMessage, IdParam, ResponseError } from "../../types/globalTypes";
import { User } from "@prisma/client";

type UserBodyCreate = Omit<
  User,
  "id" | "createdAt" | "updatedAt" | "consultantId" | "roleId"
>;

interface UserController {
  getAll: RequestHandler<null, User[] | ResponseError, null, null>;
  getOne: RequestHandler<IdParam, User | ResponseError, null, null>;
  create: RequestHandler<null, User | ResponseError, UserBodyCreate, null>;
  update: RequestHandler<IdParam, User | ResponseError, UserBodyCreate, null>;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null>;
}

export default UserController;
