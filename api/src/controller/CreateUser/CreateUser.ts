import User from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository/ICreateUserRepository";

export class CreateUser {

  constructor(
    private createUserRepository: ICreateUserRepository
  ) {
  }


  async execute(user: User) {

    const userAlreadyExists = await this.createUserRepository.findUserByEmail(user.email)

    if (userAlreadyExists)
      throw new Error('User alredy exists')

    this.createUserRepository.save(user)

  }

}