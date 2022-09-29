import { useContext } from 'react';

import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import GithubContext from '../../providers/GithubContext';

import * as C from './styles';

const Home = () => {
  const {
    userInformation: { infos },
  } = useContext(GithubContext);

  return !infos.login ? (
    <C.Message>
      Veja todos os repositórios publicos de qualquer usuário do Github atráves
      de uma simples pesquisa.
    </C.Message>
  ) : (
    <C.Container>
      <LeftSide />

      <RightSide />
    </C.Container>
  );
};

export default Home;
