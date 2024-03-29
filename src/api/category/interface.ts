import {
  ResponseError,
  IdParam,
  DeleteMessage,
  ParentId,
} from "../../types/globalTypes";
import { ParsedUrlQuery } from "querystring";
import { Category, CategoryType } from "@prisma/client";
import { RequestHandler } from "express";

type CategoryBodyPost = {
  name: string;
  description: string;
  image: string;
  type: CategoryType;
};

interface CategoryController {
  getAll: RequestHandler<
    null,
    Category[] | ResponseError,
    null,
    { type?: CategoryType }
  >;
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
  getChildCategories: RequestHandler<
    ParentId,
    Category[] | ResponseError,
    null,
    null
  >;
}

export default CategoryController;
