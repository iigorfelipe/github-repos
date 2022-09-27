import styled from 'styled-components';

export const Form = styled.form``;

export const Input = styled.input`
  line-height: 30px;
  width: 272px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  background: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.colors.secundary};
`;
