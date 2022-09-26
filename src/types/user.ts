export type UserInfos = {
  infos: Infos,
  repos: object[],
  stars: object[],
};

export type Infos = {
  avatar_url: string;
  name: string;
  email: string;
  login: string;
  twitter_username: string;
  followers: number;
  following: number;
};
