import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Icon } from '@iconify/react';
import SearchInput from '../SearchInput';
import * as C from './styles';
import GithubContext from '../../providers/GithubContext';

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
      <Icon
        icon="akar-icons:github-fill"
        width="32"
        height="32"
        cursor="pointer"
        onClick={resetUserInfos}
      />
      <SearchInput />
      <Switch
        id="abf"
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
