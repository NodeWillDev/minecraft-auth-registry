import { Router } from "express";
import createUserController from "../controller/CreateUser";
import findUserController from "../controller/FindUser";
import loginController from "../controller/Login";

const routes = Router();

routes.post('/create-user', (req, res) => {
  return createUserController.handle(req, res);
})

routes.get('/find-user', (req, res) => {
  return findUserController.handle(req, res);
})

routes.get('/login', (req, res) => {
  return loginController.handle(req, res);
})

export default routes;