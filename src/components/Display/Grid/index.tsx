import { useContext } from 'react';
import GithubContext from '../../../providers/GithubContext';
import * as C from './styles';

const Grid = () => {
  const {
    userInformation: { repos, stars },
  } = useContext(GithubContext);

  return (
    <C.GridOl>
      {repos.map((repo) => (
        <C.GridLi key={repo.id}>
          <C.GridDiv>
            <C.GridDiv2>
              <C.GridTitle>{repo.name}</C.GridTitle>
              <C.GridDescrition>{repo.description}</C.GridDescrition>
              <C.GridStars>
                <C.Span>{repo.language}</C.Span>
                <C.Span>{stars.length}</C.Span>
                <C.Span>{repo.forks}</C.Span>
              </C.GridStars>
            </C.GridDiv2>
          </C.GridDiv>
        </C.GridLi>
      ))}
    </C.GridOl>
  );
};

export default Grid;
