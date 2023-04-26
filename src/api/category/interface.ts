import {
  DeleteMessage,
  IdParam,
  ResponseError,
} from "./../../types/globalTypes";
import { RequestHandler } from "express";
import { Category } from "@prisma/client";

type CategoryBodyCreate = {
  name: string;
  description: string;
};

interface CategoryController {
  getAll: RequestHandler<null, Category[] | ResponseError, null, null>;
  getOne: RequestHandler<IdParam, Category | ResponseError, null, null>;
  create: RequestHandler<
    null,
    Category | ResponseError,
    CategoryBodyCreate,
    null
  >;
  update: RequestHandler<
    IdParam,
    Category | ResponseError,
    CategoryBodyCreate,
    null
  >;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null, null>;
}

export default CategoryController;
