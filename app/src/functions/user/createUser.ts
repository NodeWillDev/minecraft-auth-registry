import api from "../../services/api"
import IUser from "./interfaces/IUser";

export default async (user: IUser) => {

  return await api().post('/create-user', {
    email: user.email,
    name: user.name,
    nick: user.nick,
    password: user.password
  }).then(() => {
    return true;
  }).catch(() => {
    return false;
  })
} 