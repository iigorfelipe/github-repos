import { createContext } from 'react';

type UserContextType = {
  searchInputValue: string;
  setSearchInputValue: (newState: string) => void;
  userInformation: UserInfos;
  setUserInformation: (newState: UserInfos) => void;
};

export type UserInfos = {
  infos: string,
  repos: number[],
  stars: number[],
};

const initialValue = {
  searchInputValue: '',
  setSearchInputValue: () => {},
  userInformation: {
    infos: '',
    repos: [],
    stars: [],
  },
  setUserInformation: () => {},
};

const GithubContext = createContext<UserContextType>(initialValue);

export default GithubContext;
