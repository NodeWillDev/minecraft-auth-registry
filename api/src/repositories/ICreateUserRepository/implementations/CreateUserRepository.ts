import { Repository } from "typeorm";
import { UserAbstract } from "../../../abstract/UserAbstract";
import User from "../../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

export class CreateUserRepository extends UserAbstract implements ICreateUserRepository {

  constructor() {
    super();
  }

  async findUserByEmail(email: string): Promise<User | null> {

    return await this.repository.findOneBy({
      email
    })
  }

  async save(user: User): Promise<void> {
    await this.repository.save(user);
  }
}