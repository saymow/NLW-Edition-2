import express from "express";
import ClassesController from "./Controllers/ClassesController";
import ConnectionsController from "./Controllers/ConnectionsController";

const routes = express.Router();

routes.post("/classes", ClassesController.store);
routes.get("/classes", ClassesController.index);

routes.post("/connections", ConnectionsController.store);
routes.get("/connections", ConnectionsController.index);

export default routes;
