import { ReactNode, useState, useMemo } from 'react';
import GithubContext from './GithubContext';
import { Repo, UserInfos } from '../types/user';

type Props = {
  children: ReactNode;
};

const GithubProvider = ({ children }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [userInformation, setUserInformation] = useState<UserInfos>({
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
  });

  const [reposFiltered, setReposFiltered] = useState<Repo[]>([]);

  const memorizedValues = useMemo(() => {
    return {
      searchInputValue,
      setSearchInputValue,
      userInformation,
      setUserInformation,
      reposFiltered,
      setReposFiltered,
    };
  }, [searchInputValue, userInformation, reposFiltered]);

  return (
    <GithubContext.Provider value={memorizedValues}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
