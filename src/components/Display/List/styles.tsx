import styled from 'styled-components';

export const Ol = styled.ol`
  list-style: none;
  margin-top: 8px;
`;

export const Li = styled.li`
  width: 896px;
  max-height: 200px;
  padding: 24px 0px;
  border-top: 1px solid ${(props) => props.theme.colors.tertiary};
`;

export const Div = styled.div`
  width: 672x;
  height: 100%;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 20px;
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
  font-size: 12px;
  margin-left: 8px;
  padding: 2px 7px;
  border-radius: 2em;
  text-transform: capitalize;
`;

export const Descrition = styled.span`
  margin-top: 9px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secundary};
`;

export const DivTopics = styled(Div2)`
  padding: 12px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Topics = styled.div`
  font-size: 12px;
  margin-right: 2px;
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

export const Details = styled.div`
  width: 406px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.secundary};
  margin-top: 15px;
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
  margin-right: 5px;
`;

export const Image = styled.img`
  margin-right: 5px;
`;

export const Span = styled.span``;
