import { Request, Response } from "express";
import { FindUser } from "./FindUser";

export class FindUserController {

  constructor(
    private findUser: FindUser
  ) {

  }

  async handle(request: Request, response: Response) {
    try {

      const {
        email,
        name,
        nick,
        action
      } = request.headers

      const user = await this.findUser.execute({
        email,
        name,
        nick
      },
        action
      );

      return response.status(200).json({
        success: true,
        message: 'User found',
        user
      });
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          success: false,
          message: err.message
        });
      }
    }
  }
}