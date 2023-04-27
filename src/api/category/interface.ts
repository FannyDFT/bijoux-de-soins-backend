import { ResponseError, IdParam, DeleteMessage } from "../../types/globalTypes";
import { ParsedUrlQuery } from "querystring";
import { Category } from "@prisma/client";
import { RequestHandler } from "express";

type CategoryBodyPost = {
  name: string;
  description: string;
  image: string;
};

interface CategoryController {
  getAll: RequestHandler<null, Category[] | ResponseError, null, null>;
  getOne: RequestHandler<IdParam, Category | ResponseError, null, null>;
  create: RequestHandler<
    null,
    Category | ResponseError,
    CategoryBodyPost,
    null
  >;
  update: RequestHandler<
    IdParam,
    Category | ResponseError,
    CategoryBodyPost,
    null
  >;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null, null>;
  uploadImage: RequestHandler<
    IdParam,
    Category | ResponseError,
    null,
    ParsedUrlQuery
  >;
}

export default CategoryController;
