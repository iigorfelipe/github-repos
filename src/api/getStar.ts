import api from '.';

const getStar = async (username: string) => {
  const { data } = await api.get(`/users/${username}/starred`);

  return data;
};

export default getStar;
