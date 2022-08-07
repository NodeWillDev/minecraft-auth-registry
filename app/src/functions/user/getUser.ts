import api from "../../services/api";
import IUser from "./interfaces/IUser";

export default async (user: IUser) => {
  return await api().get('/find-user', {
    headers: {
      name: user.name,
      email: user.email,
      nick: user.nick,
      password: user.password
    }
  }).then((response) => {
    return response.data.user;
  }).catch(() => {
    return null;
  })
}