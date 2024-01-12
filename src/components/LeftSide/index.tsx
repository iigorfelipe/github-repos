import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import GithubContext from '../../providers/GithubContext';
import * as C from './styles';

const LeftSide = () => {
  const { title } = useContext(ThemeContext);
  const {
    userInformation: { infos },
  } = useContext(GithubContext);

  return (
    <C.LeftSide>

      <C.Avatar src={infos.avatar_url} alt="" />

      <C.Name>{infos.name}</C.Name>

      <C.Login>{infos.login}</C.Login>

      <C.BtnFollow
        onClick={() => window.open(`https://github.com/${infos.login}`)}
      >
        Ver perfil completo
      </C.BtnFollow>

      <C.Bio>{infos.bio}</C.Bio>

      <C.FollowersDiv>

        <C.Image src={`./users-bold-${title}.svg`} />

        <C.Links
          onClick={() => window.open(`https://github.com/${infos.login}?tab=followers`)}
        >
          <C.Numbers>{infos.followers}</C.Numbers>followers
        </C.Links>

        <C.Dot>&#8226;</C.Dot>

        <C.Links
          onClick={() => window.open(`https://github.com/${infos.login}?tab=following`)}
        >
          <C.Numbers>{infos.following}</C.Numbers>following
        </C.Links>

      </C.FollowersDiv>

      <C.Div>

        {
          infos.company &&
            <C.Div2>

              <C.Image src={`./building-${title}.svg`} />

              <C.Company>{infos.company}</C.Company>

            </C.Div2>
        }

        {
          infos.location &&
            <C.Div2>

              <C.Image src={`./map-pin-${title}.svg`} />

              <C.Location>{infos.location}</C.Location>

            </C.Div2>
        }

        {
          infos.blog &&
          <C.Div2>

              <C.Image src={`./link-${title}.svg`} />

              <C.Blog
                onClick={() => window.open(infos.blog)}
              >
                {infos.blog}
              </C.Blog>

            </C.Div2>
        }

        {
          infos.twitter_username && 
            <C.Div2>

              <C.Image src={`./twitter-fill-${title}.svg`} />

              <C.Twitter
               onClick={() => window.open(`https://twitter.com/${infos.twitter_username}`)}
              >
                {infos.twitter_username}
              </C.Twitter>

            </C.Div2>
        }

        {
          infos.email && 
            <C.Div2>

              <C.Image src={`./email-${title}.svg`} />

              <C.Email>{infos.email}</C.Email>

            </C.Div2>
        }

      </C.Div>

      <C.Line />

    </C.LeftSide>
  );
};

export default LeftSide;
