import { SignOptions } from "jsonwebtoken";

interface IJWTConfig extends SignOptions{
  secret: string
}

export default {
    secret: 'secret',
    expiresIn: '1d'
} as IJWTConfig;