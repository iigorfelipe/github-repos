import styled from 'styled-components';

export const Ol = styled.ol`
  width: 912px;
  margin: 0px -8px 8px;
  font-size: 14px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  width: 456px;
  height: 125px;
  margin: 0px 0px 16px;
  padding: 0px 8px;
`;

export const Div = styled.div`
  width: 440px;
  height: 125px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 5px;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const IconRepositories = styled.img`
  padding-right: 6px;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.link};
  margin-right: 0px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Visibility = styled.span`
  color: ${(props) => props.theme.colors.secundary};
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  font-size: 11px;
  margin-left: 8px;
  padding: 2px 6px;
  border-radius: 2em;
  text-transform: capitalize;
`;

export const Descrition = styled.span`
  height: 36px;
  margin: 8px 0px 0px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secundary};
`;

export const Details = styled.div`
  width: 406px;
  height: 18px;
  margin: 8px 0px 0px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secundary};
`;

export const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 15px;
`;

export const DetailFork = styled(Detail)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.link};
  }
`;

export const DetailStar = styled(DetailFork)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.link};
  }
`;

export const Language = styled.span`
  width: 12px;
  height: 12px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: ${(props) => props.languageColor};
`;

export const Image = styled.img``;

export const Span = styled.span`
  margin-left: 5px;
`;
