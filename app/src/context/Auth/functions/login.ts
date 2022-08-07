import api from "../../../services/api";
import IUserRequest from "../interfaces/IUserRequest";

export default async (user: IUserRequest) => {

  const response = await api().get('/login', {
    headers: {
      key: user.key,
      password: user.password
    }
  });
  if (response.data.success)
    return response.data;
  return false;
}