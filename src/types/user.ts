export type UserInfos = {
  infos: Infos;
  repos: Repo[];
  stars: Repo[];
};

export type Infos = {
  id?: number;
  avatar_url?: string;
  name?: string;
  login?: string;
  bio?: string;
  followers?: number;
  following?: number;
  company?: string;
  location?: string;
  blog?: string;
  email?: string;
  twitter_username?: string;
  created_at?: string;
};

export type Repo = {
  id?: number;
  name?: string;
  description?: string;
  created_at?: string;
  pushed_at?: string;
  stargazers_count: number;
  updated_at?: string;
  forks?: number;
  language?: string;
  license?: string;
  visibility?: string;
};
