import api from "../../services/api";

export default async (nick: string) => {

  return await api().get('/find-user', {
    headers: {
      nick,
      action: 'byNick',
    }
  }).then(response => {
    return response.data.user;
  }).catch(() => {
    return false;
  })
}