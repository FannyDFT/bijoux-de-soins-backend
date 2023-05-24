import {
  CategoryId,
  DeleteMessage,
  IdParam,
  ResponseError,
} from "./../../types/globalTypes";
import { RequestHandler } from "express";
import { Product } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";

type ProductBodyCreate = {
  brand: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};

interface ProductController {
  getAll: RequestHandler<null, Product[] | ResponseError, null, CategoryId>;
  getOne: RequestHandler<IdParam, Product | ResponseError, null, null>;
  create: RequestHandler<
    null,
    Product | ResponseError,
    ProductBodyCreate,
    null
  >;
  update: RequestHandler<
    IdParam,
    Product | ResponseError,
    ProductBodyCreate,
    null
  >;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null, null>;
  uploadImage: RequestHandler<
    IdParam,
    Product | ResponseError,
    null,
    ParsedUrlQuery
  >;
}

export default ProductController;
