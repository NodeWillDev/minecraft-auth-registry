import { CreateUserRepository } from "../../repositories/ICreateUserRepository/implementations/CreateUserRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const ICreateUserRepository = new CreateUserRepository();

const createUser = new CreateUser(
  ICreateUserRepository
);

const createUserController = new CreateUserController(
  createUser
)

export default createUserController