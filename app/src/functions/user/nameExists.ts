import api from "../../services/api";

export default async (name: string) => {

  return await api().get('/find-user', {
    headers: {
      name,
      action: 'byName',
    }
  }).then(response => {
    return response.data.user;
  }).catch(() => {
    return false;
  })

}