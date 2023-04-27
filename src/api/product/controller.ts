import ProductController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import deleteProduct from "./handlers/delete";
import uploadImage from "./handlers/uploadImage";

const controller: ProductController = {
  getAll,
  getOne,
  create,
  update,
  delete: deleteProduct,
  uploadImage,
};

export default controller;
