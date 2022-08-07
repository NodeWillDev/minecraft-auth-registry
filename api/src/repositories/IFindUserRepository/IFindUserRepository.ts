import User from "../../entities/User";

export interface IFindUserRepository {

  findByName(name: string): Promise<User | null>

  findByEmail(email: string): Promise<User | null>

  findByNick(nick: string): Promise<User | null>

  findUser(user: Omit<User, 'password'>): Promise<User | null>
}