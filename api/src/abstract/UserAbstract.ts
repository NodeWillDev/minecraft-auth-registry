import { Repository } from "typeorm";
import User from "../entities/User";
import { AppDataSource } from "../typeorm/data-sources";

export abstract class UserAbstract {

  protected repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

}