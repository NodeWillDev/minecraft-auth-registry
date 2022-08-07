import User from "../../entities/User";
import { IFindUserRepository } from "../../repositories/IFindUserRepository/IFindUserRepository";

export class FindUser {

  constructor(
    private findUserRepostiory: IFindUserRepository
  ) {

  }

  async execute(
    user: Omit<User, 'password'>,
    findBy: IActions
  ) {

    if (findBy != 'all' && (findBy == 'byEmail' && !user.email)
      || (findBy == 'byName' && !user.name)
      || (findBy == 'byNick' && !user.nick)
    )
      throw new Error('Email, Name or Nick, not passed')

    const find = async (action: IActions) => {
      switch (action) {

        case 'all':
          return await this.findUserRepostiory.findUser({
            email: user.email,
            name: user.name,
            nick: user.nick
          });
        case 'byEmail':
          return await this.findUserRepostiory.findByEmail(user.email);
        case 'byNick':
          return await this.findUserRepostiory.findByNick(user.nick);
        case 'byName':
          return await this.findUserRepostiory.findByName(user.name);
      }
    }

    if (!await find(findBy))
      throw new Error('User not Found');

    return find(findBy);

  }
}