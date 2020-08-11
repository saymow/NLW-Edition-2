import express from "express";

import Middleware from "./Middleware";

import ClassesController from "./Controllers/ClassesController";
import ConnectionsController from "./Controllers/ConnectionsController";
import UsersController from "./Controllers/UsersController";

const routes = express.Router();

routes.post("/signUp", UsersController.store);
routes.post("/signin", UsersController.signIn);
routes.post("/send_recover_pass", UsersController.sendRecoverPass);
routes.post("/change_pass", UsersController.changePassword);

routes.post("/classes", Middleware.auth, ClassesController.store);
routes.get("/classes", Middleware.auth, ClassesController.index);

routes.get("/connections", ConnectionsController.index);
routes.post("/connections", Middleware.auth, ConnectionsController.store);

export default routes;
