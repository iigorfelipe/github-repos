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
    <C.Div>

      <C.Message>
        Veja todos os repositórios públicos de qualquer usuário do Github através
        de uma simples pesquisa.
      </C.Message>

      <C.Repository href="https://github.com/iigorfelipe/github-repos" target="_blank">
        Github do projeto
      </C.Repository>

    </C.Div>
  ) : (
    <C.Container>

      <LeftSide />
      <RightSide />

    </C.Container>
  );
};

export default Home;
