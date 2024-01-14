import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import GithubContext from '../../providers/GithubContext';
import { initialLanguages, initialOrders, initialTypes } from '../../helpers/initialValues';
import BasicPopover from '../Popover';
import * as C from './styles';

const Filters = () => {
  const {
    userInformation: { repos, stars },
    valuesToBeFiltered,
    setValuesToBeFiltered
  } = useContext(GithubContext);

  const { title } = useContext(ThemeContext);

  const [searchRepo, setSearchRepo] = useState('');
  const [types, setTypes] = useState(initialTypes);
  const [languages, setLanguages] = useState(initialLanguages);
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    
    const uniqueLanguages = new Set(initialLanguages.map(({ option }) => option));
  
    repos.forEach(({ language }) => language && uniqueLanguages.add(language));

    const result = Array.from(
      uniqueLanguages, option => ({ option, check: option === 'Todos os idiomas' })
    );

    setLanguages(result);
  }, [repos]);


  useEffect(() => {
    setValuesToBeFiltered({
      ...valuesToBeFiltered,
      repo: searchRepo
    });
  }, [searchRepo]);

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

      <BasicPopover
        title='Tipo'
        label='Selecionar tipo'
        options={types}
        setOptions={setTypes}
      />

      <BasicPopover
        title='Linguagem'
        label='Selecionar idioma'
        options={languages}
        setOptions={setLanguages}
      />

      <BasicPopover
        title='Ordem'
        label='Selecionar ordem'
        options={orders}
        setOptions={setOrders}
      />

    </C.Container>
  );
};

export default Filters;
