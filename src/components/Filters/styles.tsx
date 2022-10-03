import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const Length = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.background.secundary};
  border-radius: 2em;
  margin-right: 10px;
  padding: 5px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  padding-right: 2px;
`;

export const Dot = styled.span`
  padding: 0px 5px;
  font-size: xx-small;
  color: ${(props) => props.theme.colors.secundary};
`;

export const Span = styled.span``;

export const Input = styled.input`
  height: 32px;
  width: 490px;
  padding: 5px 12px;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  background: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.colors.secundary};
`;

export const Select = styled.select`
  height: 32px;
  padding: 0 12px;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  background: ${(props) => props.theme.background.tertiary};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin: 0px 2px;
  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.secundary};
    background: ${(props) => props.theme.colors.tertiary};
  }
`;

export const Option = styled.option``;
