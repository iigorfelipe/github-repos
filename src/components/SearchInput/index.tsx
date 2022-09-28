import { FormEvent, useContext, useState } from 'react';

import swal from 'sweetalert';

import getRepository from '../../api/getRepository';
import getStar from '../../api/getStar';
import getUser from '../../api/getUser';

import GithubContext from '../../providers/GithubContext';
import Loading from '../Loading';

import * as C from './styles';

const SearchInput = () => {
  const [loading, setLoading] = useState(false);

  const { searchInputValue, setSearchInputValue, setUserInformation } =
    useContext(GithubContext);

  const handleGettingUser = async (e: FormEvent) => {
    e.preventDefault();

    if (searchInputValue.length !== 0) {
      setLoading(true);

      try {
        const dataUser = await getUser(searchInputValue);
        const dataRepo = await getRepository(searchInputValue);
        const dataStar = await getStar(searchInputValue);

        setUserInformation({
          infos: dataUser,
          repos: dataRepo,
          stars: dataStar,
        });
      } catch (error) {
        swal(
          'Usuário não encontrado',
          'Por favor verifique se você digitou o username corretamente',
          'warning'
        );
      }
    } else {
      swal('Campo vazio', 'Por favor digite um username', 'warning');
      setLoading(false);
      setSearchInputValue('');
    }

    setLoading(false);
    setSearchInputValue('');
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

      {loading && (
        <Loading type="bubbles" color="#fff" height={20} width={40} />
      )}
    </C.Form>
  );
};

export default SearchInput;
