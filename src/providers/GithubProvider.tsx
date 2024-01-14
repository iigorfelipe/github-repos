import { ReactNode, useState, useEffect } from 'react';
import GithubContext from './GithubContext';
import { Repo, UserInfos } from '../types/user';
import { ValuesToBeFiltered } from '../types/filter';

type Props = {
  children: ReactNode;
};

const GithubProvider = ({ children }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [userInformation, setUserInformation] = useState<UserInfos>({
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

  const [reposFiltered, setReposFiltered] = useState<Repo[]>([]);
  const [valuesToBeFiltered, setValuesToBeFiltered] = useState<ValuesToBeFiltered>({
    repo: '',
    type: '',
    language: '',
    order: '',
  });

  useEffect(() => {
    setValuesToBeFiltered({
      repo: '',
      type: '',
      language: '',
      order: '',
    });
  }, [userInformation.infos.login]);


  useEffect(() => {
    const applyFilters = () => {
      const repositories = userInformation?.repos || [];
      let filteredRepos = [...repositories];
  
      if (valuesToBeFiltered.repo.length > 0) {
        filteredRepos = filteredRepos.filter((repo) =>
          repo.name?.toLowerCase().startsWith(valuesToBeFiltered.repo.toLowerCase())
        );
      };
  
      if (valuesToBeFiltered.language.length > 0 && valuesToBeFiltered.language !== 'Todos os idiomas') {
        filteredRepos = filteredRepos.filter((repo) =>
          repo.language?.toLowerCase() === valuesToBeFiltered.language.toLowerCase()
        );
      };

      if (valuesToBeFiltered.type !== 'Todos' && valuesToBeFiltered.type.length > 0) {
        // "Nota: A filtragem por 'Tipo' pode ter limitações devido a possíveis restrições na API pública do GitHub."
        switch (valuesToBeFiltered.type) {
          case 'Público':
            filteredRepos = filteredRepos.filter((repo) => repo.visibility === 'public');
            break;
          case 'Privado':
            filteredRepos = filteredRepos.filter((repo) => repo.visibility === 'private');
            break;
          case 'Fontes':
            filteredRepos = filteredRepos.filter((repo) => repo.fork === true);
            break;
          case 'Bifurcações':
            filteredRepos = filteredRepos.filter((repo) => repo.forks_count > 0);
            break;
          case 'Arquivado':
            filteredRepos = filteredRepos.filter((repo) => repo.archived === true);
            break;
          case 'Espelhos':
            filteredRepos = filteredRepos.filter((repo) => repo.mirror_url !== null);
            break;
          case 'Modelos':
            filteredRepos = filteredRepos.filter((repo) => repo.is_template === true);
            break;
          default:
            break;
        };
      };
  
      switch (valuesToBeFiltered.order) {
        case 'Nome':
          filteredRepos.sort((a, b) => (a.name > b.name ? 1 : -1));
          break;
        case 'Estrelas':
          filteredRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
          break;
        default:
          filteredRepos.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1));
          break;
      };
  
      setReposFiltered(filteredRepos);
    };
  
    applyFilters();
  }, [valuesToBeFiltered, userInformation?.repos]);

  const values = {
    searchInputValue,
    setSearchInputValue,
    userInformation,
    setUserInformation,
    reposFiltered,
    setReposFiltered,
    valuesToBeFiltered,
    setValuesToBeFiltered
  };

  return (
    <GithubContext.Provider value={values}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
