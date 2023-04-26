import CategoryController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";

import create from "./handlers/create";

const controller: CategoryController = {
  getAll,
  getOne,
  create,
};

export default controller;
