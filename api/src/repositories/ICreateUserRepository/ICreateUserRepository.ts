import User from "../../entities/User";

export interface ICreateUserRepository {

  findUserByEmail(email: string): Promise<User | null>

  save(user: User): Promise<void>
}