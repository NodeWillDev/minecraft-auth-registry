import User from "../../entities/User";
import LoginInterface from "../../interfaces/Login/LoginInterface";

export default interface ILoginRepository {


  findUser(login: LoginInterface) : Promise<Omit<User, 'password'> | null>
}