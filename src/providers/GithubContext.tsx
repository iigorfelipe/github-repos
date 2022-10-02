import { createContext } from 'react';
import { UserContextType } from '../types/context';

const initialValue = {
  searchInputValue: '',
  setSearchInputValue: () => {},

  userInformation: {
    infos: {
      avatar_url: '',
      name: '',
      email: '',
      login: '',
      twitter_username: '',
      followers: 0,
      following: 0,
    },
    repos: [],
    stars: [],
  },
  setUserInformation: () => {},

  reposFiltered: [],
  setReposFiltered: () => {},
};

const GithubContext = createContext<UserContextType>(initialValue);

export default GithubContext;
