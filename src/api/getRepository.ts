import api from '.';

const getRepository = async (username: string) => {
  const { data } = await api.get(`users/${username}/repos`);

  return data;
};

export default getRepository;
