import AppRoutes from './routes';
import GithubProvider from './providers/GithubProvider';

const App = () => (
  <GithubProvider>
    <AppRoutes />
  </GithubProvider>
);

export default App;
