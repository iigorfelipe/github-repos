import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: sans-serif;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.background.primary};
  }
`;
