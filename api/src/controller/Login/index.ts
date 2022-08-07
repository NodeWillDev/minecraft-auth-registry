import LoginRepository from "../../repositories/ILoginRepository/implementations/LoginRepository";
import Login from "./Login";
import LoginController from "./LoginController";

const repository = new LoginRepository();

const login = new Login(repository);

const loginController = new LoginController(login);

export default loginController;