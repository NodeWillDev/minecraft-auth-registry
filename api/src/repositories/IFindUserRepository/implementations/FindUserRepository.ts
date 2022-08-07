import { UserAbstract } from "../../../abstract/UserAbstract";
import User from "../../../entities/User";
import { IFindUserRepository } from "../IFindUserRepository";

export class FindUserRepository extends UserAbstract implements IFindUserRepository {

  constructor() {
    super();
  }

  async findByEmail(email: string): Promise<User | null> {

    return await this.repository.findOneBy({
      email
    });
  }

  async findByName(name: string): Promise<User | null> {
    return await this.repository.findOneBy({
      name
    });
  }

  async findByNick(nick: string): Promise<User | null> {
    return await this.repository.findOneBy({
      nick
    });
  }

  async findUser(user: Omit<User, "password">): Promise<User | null> {
    return await this.repository.findOne({
      where: [{
        email: user.email,
      },
      {
        nick: user.nick
      },
      {
        name: user.name
      }],

    });
  }

}