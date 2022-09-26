import { ReactNode, useState } from 'react';
import GithubContext, { UserInfos } from './GithubContext';
import PropTypes from 'prop-types';

type Props = {
  children: ReactNode;
};

const GithubProvider = ({ children }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [userInformation, setUserInformation] = useState<UserInfos>({
    infos: '',
    repos: [],
    stars: [],
  });

  return (
    <GithubContext.Provider
      value={
        {
          searchInputValue,
          setSearchInputValue,
          userInformation,
          setUserInformation,
        }
      }
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubProvider;
