import api from '.';

const getUser = async (username: string) => {
  const { data } = await api.get(`/users/${username}`);

  return data;
};

export default getUser;
