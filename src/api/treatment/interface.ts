import { RequestHandler } from "express";
import { CategoryId, IdParam, ResponseError } from "../../types/globalTypes";
import { Service } from "@prisma/client";
import { ParsedUrlQuery } from "querystring";

type ServiceBodyCreate = {
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  categoryId: string;
};

interface ServiceController {
  getAll: RequestHandler<null, Service[] | ResponseError, null, CategoryId>;
  getOne: RequestHandler<IdParam, Service | ResponseError, null, null>;
  update: RequestHandler<
    IdParam,
    Service | ResponseError,
    ServiceBodyCreate,
    null
  >;
  create: RequestHandler<
    null,
    Service | ResponseError,
    ServiceBodyCreate,
    null
  >;
  delete: RequestHandler<IdParam, null | ResponseError, null, null>;
  uploadImage: RequestHandler<
    IdParam,
    Service | ResponseError,
    null,
    ParsedUrlQuery
  >;
}

export default ServiceController;
