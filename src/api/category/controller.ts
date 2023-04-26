import CategoryController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import deleteCategory from "./handlers/delete";

const controller: CategoryController = {
  getAll,
  getOne,
  create,
  update,
  delete: deleteCategory,
};
export default controller;