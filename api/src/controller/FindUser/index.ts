import { FindUserRepository } from "../../repositories/IFindUserRepository/implementations/FindUserRepository";
import { FindUser } from "./FindUser";
import { FindUserController } from "./FindUserController";

const findUserRepostiory = new FindUserRepository();

const findUser = new FindUser(
  findUserRepostiory
);

const findUserController = new FindUserController(
  findUser
);

export default findUserController;