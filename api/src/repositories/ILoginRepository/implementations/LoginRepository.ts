import { UserAbstract } from "../../../abstract/UserAbstract";
import User from "../../../entities/User";
import LoginInterface from "../../../interfaces/Login/LoginInterface";
import ILoginRepository from "../ILoginRepository";

export default class LoginRepository extends UserAbstract implements ILoginRepository {

  async findUser(login: LoginInterface): Promise<Omit<User, 'password'> | null> {

    const result = await this.repository.findOne({
      select: {
        email: true,
        name: true,
        nick: true,
        id: true
      },
      where: [{
        name: login.key,
        password: login.password
      }, {
        email: login.key,
        password: login.password
      }, {
        nick: login.key,
        password: login.password
      }]
    });

    return result;
  }
}