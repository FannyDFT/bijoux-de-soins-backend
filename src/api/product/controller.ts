import { Form } from "multiparty";
import ProductController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import uploadImage from "./handlers/uploadImage";
import update from "./handlers/update";
import create from "./handlers/create";
import deleteProduct from "./handlers/delete";

const controller: ProductController = {
  getAll,
  getOne,
  update,
  create,
  delete: deleteProduct,
  uploadImage,
};

export default controller;
