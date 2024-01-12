import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
  padding: 10px;
  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivTitle = styled(Div)`
  flex-direction: column;
  padding-bottom: 25px;
`;

export const Title = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.link};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Visibility = styled.span`
  color: ${(props) => props.theme.colors.secundary};
  border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};
  font-size: 12px;
  padding: 2px 6px;
  text-transform: capitalize;
`;

export const Descrition = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secundary};
`;

export const DivLanguage = styled(Div)`
  padding: 15px 0px;
`;

export const Language = styled.span`
  width: 12px;
  height: 12px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: ${(props) => props.languageColor};
  margin-right: 5px;
`;

export const Image = styled.img`
  margin-right: 5px;
`;

export const Span = styled.span``;

export const DivTopics = styled(Div)`
  flex-wrap: wrap;
`;

export const Topics = styled.a`
  font-size: 12px;
  margin: 2px;
  padding: 4px 8px;
  border-radius: 2em;
  border: 1px solid transparent;
  cursor: pointer;
  color: ${(props) => props.theme.colors.link};
  background: ${(props) => props.theme.background.link};
  &:hover {
    color: #fff;
    background: ${(props) => props.theme.background.linkHover};
  }
`;

export const Details = styled(Div)`
  color: ${(props) => props.theme.colors.secundary};
  justify-content: space-evenly;
  padding-top: 15px;
`;

export const Detail = styled(Div)`
  font-size: 12px;
  padding: 5px 0px;
`;

export const DetailFork = styled(Detail)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.link};
  }
`;

export const DetailStar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
