import { ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
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

  return (
    <GithubContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubProvider;
