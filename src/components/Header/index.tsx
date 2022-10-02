import { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import GithubContext from '../../providers/GithubContext';
import SearchInput from '../SearchInput';

import * as C from './styles';

type Props = {
  toggleTheme(): void;
};

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext);
  const { setUserInformation, setSearchInputValue } = useContext(GithubContext);

  const resetUserInfos = () => {
    setUserInformation({
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

    setSearchInputValue('');
  };

  return (
    <C.Container>

      <C.GituhubLogo src="./github-fill.svg" onClick={resetUserInfos} />

      <SearchInput />

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={35}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={colors.secundary}
      />

    </C.Container>
  );
};

export default Header;
