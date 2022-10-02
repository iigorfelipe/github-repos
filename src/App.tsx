import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Dark, Ligth, GlobalStyle } from './styles';

import GithubProvider from './providers/GithubProvider';

import usePersistedState from './helpers/usePersistedState';

import AppRoutes from './routes';
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', Dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? Dark : Ligth);
  };

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />

      <GithubProvider>

        <Header toggleTheme={toggleTheme} />

        <AppRoutes />

      </GithubProvider>

    </ThemeProvider>
  );
};

export default App;
