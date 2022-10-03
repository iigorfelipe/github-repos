/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import getDayAndMouth from '../../../helpers/convertDate';

import languages from '../../../helpers/languageColors.json';
import GithubContext from '../../../providers/GithubContext';

import * as C from './styles';

const List = () => {
  const { title } = useContext(ThemeContext);

  const { reposFiltered } = useContext(GithubContext);

  return (
    <C.Ol>
      {
        reposFiltered.map((repo) => (
          <C.Li key={repo.id}>

            <C.Div>

              <C.Div2>

                <C.Title>{repo.name}</C.Title>

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

                {
                  repo.topics?.length
                    ? repo.topics?.length > 0 &&
                      <C.DivTopics>

                        {          
                          repo.topics?.map((topic) => (
                            <C.Topics key={topic}>{topic}</C.Topics>
                          ))
                        }

                      </C.DivTopics>
                    : ''
                }

              <C.Div2>
                
                <C.Details>
                  {
                    repo.language &&
                      <C.Detail>

                        <C.Language languageColor={languages[repo.language]} />

                        <C.Span>{repo.language}</C.Span>

                      </C.Detail>
                  }

                  {
                    repo.stargazers_count > 0 &&
                      <C.Detail>

                        <C.Image src={`./star-${title}.svg`} />

                        <C.Span>{repo.stargazers_count}</C.Span>

                      </C.Detail>
                  }

                  {
                    repo.forks >= 1 &&
                      <C.Detail>

                        <C.Image src={`./repo-forked-16-${title}.svg`} />

                        <C.Span>{repo.forks}</C.Span>

                      </C.Detail>
                  }

                  {
                    repo.license && 
                      <C.Detail>
                        <C.Image src={`./balance-scale-${title}.svg`} />

                        <C.Span>{repo.license.name}</C.Span>

                      </C.Detail>
                  }

                  {
                    repo.updated_at && 
                      <C.Detail>

                        <C.Span>Updated on {getDayAndMouth(repo.updated_at)}</C.Span>

                      </C.Detail>
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

export default List;
