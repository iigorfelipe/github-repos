import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 32px;
  margin: 0px 35px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 0 20px;
  font-size: xx-large;
  text-align: center;
`;

export const Repository = styled.a`
  font-size: large;
  margin-top: 15vh;
  text-decoration: none;
  color: ${(props) => props.theme.colors.link};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
