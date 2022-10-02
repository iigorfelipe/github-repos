import { useContext, useEffect, useState } from 'react';
import GithubContext from '../../providers/GithubContext';

import * as C from './styles';

const Filters = () => {
  const {
    userInformation: { repos },
    setReposFiltered,
  } = useContext(GithubContext);
  const [searchRepo, setSearchRepo] = useState('');

  useEffect(() => {
    const filtered = repos.filter((repo) => repo.name?.startsWith(searchRepo));

    setReposFiltered(filtered);
  }, [repos, searchRepo, setReposFiltered]);

  return (
    <C.Div>

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

    </C.Div>
  );
};

export default Filters;
