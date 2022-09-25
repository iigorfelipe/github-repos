import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchUser from '../pages/SearchUser';
import Main from '../pages/Main';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
  
      <Route path='/' element={ <SearchUser /> } />
      <Route path='/repository' element={ <Main /> } />

    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
