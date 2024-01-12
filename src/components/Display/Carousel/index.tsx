import Carousel from 'nuka-carousel/lib/carousel';
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import GithubContext from '../../../providers/GithubContext';

import languages from '../../../helpers/languageColors.json';
import getDayAndMouth from '../../../helpers/convertDate';

import * as C from './styles';

const languageColors: Record<string, string> = languages;

const CarouselDisplay = () => {
  const { title } = useContext(ThemeContext);

  const { reposFiltered, userInformation: { infos } } = useContext(GithubContext);

  return (
    <Carousel
      wrapAround
      withoutControls
      cellSpacing={20}
      slidesToShow={2.5}
    >
      {
        reposFiltered.map((repo) => (
          <C.Container key={repo.id}>

            <C.DivTitle>

              <C.Title
                onClick={() => window.open(`https://github.com/${infos.login}/${repo.name}`)}
              >
                {repo.name}
              </C.Title>

              <C.Visibility>{repo.visibility}</C.Visibility>

            </C.DivTitle>

            <C.Div>

              <C.Descrition>
                {
                  repo.description
                    ? repo.description
                    : 'Descrição vazia.'
                }
              </C.Descrition>

            </C.Div>

            {
              repo.language &&
                <C.DivLanguage>

                  <C.Language languageColor={languageColors[repo.language]} />

                  <C.Span>{repo.language}</C.Span>

                </C.DivLanguage>
            }

            <C.DivTopics>

              {
                repo.topics?.length
                  ? repo.topics?.length > 0 &&
                    <C.DivTopics>

                      {          
                        repo.topics?.map((topic) => (
                          <C.Topics
                            key={topic}
                            onClick={() => window.open(`https://github.com/topics/${topic}`)}
                          >
                            {topic}
                          </C.Topics>
                        ))
                      }

                    </C.DivTopics>
                  : ''
              }

            </C.DivTopics>

            <C.Details>

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

              {
                repo.license && 
                  <C.Detail>
                    <C.Image src={`./balance-scale-${title}.svg`} />

                    <C.Span>{repo.license.name}</C.Span>

                  </C.Detail>
              }

            </C.Details>

            <C.Details>

              {
                repo.created_at && 
                  <C.Detail>

                    <C.Span>Created on {getDayAndMouth(repo.created_at)}</C.Span>

                  </C.Detail>
              }

              {
                repo.updated_at &&
                  <C.Detail>

                    <C.Span>Updated on {getDayAndMouth(repo.updated_at)}</C.Span>

                  </C.Detail>
              }

            </C.Details>

          </C.Container>
        ))
      }
    </Carousel>
  );
};

export default CarouselDisplay;
