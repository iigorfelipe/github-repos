import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>

      <Route path='/' element={ <Navigate to='/home' /> } />
      <Route path='/home' element={ <Home /> } />

    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
