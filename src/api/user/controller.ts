import UserController from "./interface";
import getAll from "./handler/getAll";
import getOne from "./handler/getOne";
import update from "./handler/update";
import create from "./handler/create";
import deleteUser from "./handler/delete";

const controller: UserController = {
  getAll,
  getOne,
  update,
  create,
  delete: deleteUser,
};

export default controller;
