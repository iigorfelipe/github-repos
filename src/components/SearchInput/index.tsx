import { FormEvent, useContext } from 'react';
import getRepository from '../../api/getRepository';
import getStar from '../../api/getStar';
import getUser from '../../api/getUser';
import GithubContext from '../../providers/GithubContext';
import * as C from './styles';

const SearchInput = () => {
  const { searchInputValue, setSearchInputValue, setUserInformation } =
    useContext(GithubContext);

  const handleGettingUser = async (e: FormEvent) => {
    e.preventDefault();

    const dataUser = await getUser(searchInputValue);
    const dataRepo = await getRepository(searchInputValue);
    const dataStar = await getStar(searchInputValue);

    setUserInformation({
      infos: dataUser,
      repos: dataRepo,
      stars: dataStar,
    });
  };

  return (
    <C.Form onSubmit={handleGettingUser}>
      <C.Input
        type="text"
        id="username"
        placeholder="Digite um usuário"
        value={searchInputValue}
        onChange={({ target: { value } }) => setSearchInputValue(value)}
      />
    </C.Form>
  );
};

export default SearchInput;
