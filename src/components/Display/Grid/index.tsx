import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import languages from '../../../helpers/languageColors.json';
import GithubContext from '../../../providers/GithubContext';

import * as C from './styles';

const languageColors: Record<string, string> = languages;

const Grid = () => {
  const { title } = useContext(ThemeContext);

  const { reposFiltered, userInformation: { infos } } = useContext(GithubContext);

  return (
    <C.Ol>
      {
        reposFiltered.map((repo) => (
          <C.Li key={repo.id}>

            <C.Div>

              <C.Div2>

                <C.IconRepositories src={`./repositories-${title}.svg`} />

                <C.Title
                  onClick={() => window.open(`https://github.com/${infos.login}/${repo.name}`)}
                >
                  {repo.name}
                </C.Title>

                <C.Visibility>{repo.visibility}</C.Visibility>

              </C.Div2>

              <C.Div2>

                <C.Descrition>
                  {
                    repo.description
                      ? repo.description
                      : 'Descrição vazia.'
                  }
                </C.Descrition>

              </C.Div2>

              <C.Div2>
                
                <C.Details>
                  {
                    repo.language &&
                      <C.Detail>

                        <C.Language languageColor={languageColors[repo.language]} />

                        <C.Span>{repo.language}</C.Span>

                      </C.Detail>
                  }

                  {
                    repo.stargazers_count > 0 &&
                      <C.DetailStar>

                        <C.Image src={`./star-${title}.svg`} />

                        <C.Span>{repo.stargazers_count}</C.Span>

                      </C.DetailStar>
                  }

                  {
                    repo.forks
                      ? repo.forks >= 1 &&
                        <C.DetailFork>

                          <C.Image src={`./repo-forked-16-${title}.svg`} />

                          <C.Span
                            onClick={() => window.open(`https://github.com/microsoft/${repo.name}/fork`)}
                          >
                            {repo.forks}
                          </C.Span>

                        </C.DetailFork>
                      : ''
                  }

                </C.Details>
              </C.Div2>
            </C.Div>
          </C.Li>
        ))
      }
    </C.Ol>
  );
};

export default Grid;
