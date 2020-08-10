import express from "express";

import ClassesController from "./Controllers/ClassesController";
import ConnectionsController from "./Controllers/ConnectionsController";
import UsersController from "./Controllers/UsersController";

const routes = express.Router();

routes.post("/signUp", UsersController.store);
routes.post("/signin", UsersController.signIn);
routes.post("/recover_pass", UsersController.recoverPass)

routes.post("/classes", ClassesController.store);
routes.get("/classes", ClassesController.index);

routes.post("/connections", ConnectionsController.store);
routes.get("/connections", ConnectionsController.index);

export default routes;
