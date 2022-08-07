import { createContext } from "react";
import IUserData from "./interfaces/IUserData";
import IUserRequest from "./interfaces/IUserRequest";

interface AuthContextData {
  user: IUserData | null,
  isLoaded: () => boolean,
  signIn: (user: IUserRequest) => Promise<void>,
  signOut: () => void,
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);