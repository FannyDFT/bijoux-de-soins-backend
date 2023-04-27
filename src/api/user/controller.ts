import UserController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import update from "./handlers/update";
import create from "./handlers/create";
import deleteUser from "./handlers/delete";

const controller: UserController = {
  getAll,
  getOne,
  update,
  create,
  delete: deleteUser,
};

export default controller;
