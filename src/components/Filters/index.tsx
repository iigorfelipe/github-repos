import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import GithubContext from '../../providers/GithubContext';

import * as C from './styles';

const Filters = () => {
  const {
    userInformation: { repos, stars },
    setReposFiltered,
  } = useContext(GithubContext);
  const [searchRepo, setSearchRepo] = useState('');

  const { title } = useContext(ThemeContext);

  useEffect(() => {
    const filtered = repos.filter((repo) => repo.name?.startsWith(searchRepo));

    setReposFiltered(filtered);
  }, [repos, searchRepo, setReposFiltered]);

  return (
    <C.Container>

      <C.Length>

        <C.Div>

          <C.Image src={`./repositories-${title}.svg`} />

          <C.Span>{repos.length}</C.Span>

        </C.Div>

        <C.Dot>&#8226;</C.Dot>

        <C.Div>

          <C.Image src={`./star-${title}.svg`} />

          <C.Span>{stars.length}</C.Span>

        </C.Div>

      </C.Length>

      <C.Input
        type="text"
        placeholder="Encontre um repositório"
        value={searchRepo}
        onChange={({ target: { value } }) => setSearchRepo(value)}
      />

      <C.Select>
        <C.Option>Tipo</C.Option>
      </C.Select>

      <C.Select>
        <C.Option>Linguagem</C.Option>
      </C.Select>

      <C.Select>
        <C.Option>Ordem</C.Option>
      </C.Select>

    </C.Container>
  );
};

export default Filters;
