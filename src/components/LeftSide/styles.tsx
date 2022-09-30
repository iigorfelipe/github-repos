import styled from 'styled-components';

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;
  font-size: 14px;
  padding: 25px 0px;
`;

export const Avatar = styled.img`
  width: 296px;
  height: 296px;
  border-radius: 50%;
  border: none;
`;

export const Name = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-top: 14px;
`;

export const Login = styled.span`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color: ${(props) => props.theme.colors.secundary};
`;

export const BtnFollow = styled.button`
  cursor: pointer;
  height: 32px;
  margin-top: 15px;
  padding: 5px 16px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  background: ${(props) => props.theme.background.tertiary};
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background: ${(props) =>
      props.theme.title === 'dark' ? props.theme.colors.tertiary : ''};
    border: 1px solid
      ${(props) =>
        props.theme.title === 'dark' ? props.theme.colors.secundary : 'none'};
  }
`;

export const Bio = styled.div`
  font-size: 16px;
  margin-top: 15px;
  line-height: 23px;
`;

export const FollowersDiv = styled.div`
  display: flex;
  align-items: center;
  height: 12px;
  margin: 20px 0px 16px 0px;
`;

export const Links = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secundary};
  padding-left: 4px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.link};
  }
`;

export const Numbers = styled.span`
  height: 16px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  padding-right: 4px;
  &:hover {
    color: ${(props) => props.theme.colors.link};
  }
`;

export const Dot = styled.span`
  font-size: xx-small;
  color: ${(props) => props.theme.colors.secundary};
  padding: 0px 1px 0px 5px;
`;

export const Div = styled.div`
  margin-top: 7px;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  padding-right: 5px;
`;

export const Company = styled.a`
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Location = styled.span`
  line-height: 24px;
  cursor: default;
  &:hover {
    text-decoration: none;
  }
`;

export const Blog = styled.a`
  line-height: 24px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Twitter = styled.a`
  line-height: 24px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};
  margin-top: 12px;
`;
