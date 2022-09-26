import { ReactNode, useState, useMemo } from 'react';
import GithubContext from './GithubContext';
import { UserInfos } from '../types/user';

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

  const memorizedValues = useMemo(() => {
    return {
      searchInputValue,
      setSearchInputValue,
      userInformation,
      setUserInformation,
    };
  }, [searchInputValue, userInformation]);

  return (
    <GithubContext.Provider value={memorizedValues}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
