import User from "../../entities/User";
import LoginInterface from "../../interfaces/Login/LoginInterface";
import ILoginRepository from "../../repositories/ILoginRepository/ILoginRepository";

export default class Login {

  constructor(
    private loginRepository: ILoginRepository
  ) {

  }

  async execute(login: LoginInterface) {

    const userFind = await this.loginRepository.findUser(login);

    if (!userFind)
      throw new Error('User not Found');

    return userFind;
  }
}