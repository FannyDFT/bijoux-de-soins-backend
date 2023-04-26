import CategoryController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import uploadImage from "./handlers/uploadImage";
import update from "./handlers/update";
import deleteCategory from "./handlers/delete";

import create from "./handlers/create";

const controller: CategoryController = {
  getAll,
  getOne,
  create,
  update,
  delete: deleteCategory,
  uploadImage,
};

export default controller;
