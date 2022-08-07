import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController {

  constructor(
    private createUser: CreateUser
  ) {

  }

  async handle(request: Request, response: Response) {
    const { name, email, password, nick } = request.body;

    try {
      await this.createUser.execute({
        name,
        email,
        nick,
        password
      })

      return response.status(200).json({
        success: true,
        message: 'User created with success'
      })
    }
    catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          success: false,
          message: err.message
        })
      }
    }
  }
}