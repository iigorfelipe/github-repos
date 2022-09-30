import { useContext } from 'react';
import { Icon } from '@iconify/react';
import GithubContext from '../../providers/GithubContext';
import * as C from './styles';

const LeftSide = () => {
  const {
    userInformation: { infos },
  } = useContext(GithubContext);

  return (
    <C.LeftSide>
      <C.Avatar src={infos.avatar_url} alt="" />
      <C.Name>{infos.name}</C.Name>
      <C.Login>{infos.login}</C.Login>
      <C.BtnFollow>Follow</C.BtnFollow>
      <C.Bio>{infos.bio}</C.Bio>

      <C.FollowersDiv>
        <Icon icon="ph:users-bold" height="16" width="16" />

        <C.Links>
          <C.Numbers>{infos.followers}</C.Numbers>followers
        </C.Links>

        <C.Dot>&#8226;</C.Dot>

        <C.Links>
          <C.Numbers>{infos.following}</C.Numbers>following
        </C.Links>
      </C.FollowersDiv>

      <C.Div>
        <C.Div2>
          <C.Image src="./building.svg" />
          <C.Company>{infos.company}</C.Company>
        </C.Div2>

        <C.Div2>
          <C.Image src="./link.svg" />
          <C.Location>{infos.location}</C.Location>
        </C.Div2>

        <C.Div2>
          <C.Image src="./map-pin.svg" />
          <C.Blog>{infos.blog}</C.Blog>
        </C.Div2>

        <C.Div2>
          <C.Image src="./twitter-fill.svg" />
          <C.Twitter>{infos.twitter_username}</C.Twitter>
        </C.Div2>
      </C.Div>

      <C.Line />
    </C.LeftSide>
  );
};

export default LeftSide;
