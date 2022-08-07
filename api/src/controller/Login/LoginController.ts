import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import JWTConfig from "../../config/JWTConfig";
import Login from "./Login";

export default class LoginController {

  constructor(
    private login: Login
  ) {

  }

  async handle(request: Request, response: Response) {

    const { key, password } = request.headers;

    try {

      const user = await this.login.execute({
        key,
        password
      });


      const token = sign({}, JWTConfig.secret, {
        subject: String(user.email),
        expiresIn: JWTConfig.expiresIn
      })

      return response.status(200).json({
        success: true,
        message: 'Successfully logged in',
        user,
        token
      })

    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          success: false,
          message: err.message
        })
      }
    }
  }
}