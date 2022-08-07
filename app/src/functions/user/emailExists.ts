import api from "../../services/api";

export default async (email: string) => {

  return await api().get('/find-user', {
    headers: {
      email,
      action: 'byEmail',
    }
  }).then(response => {
    return response.data.user;
  }).catch(() => {
    return false;
  })
}