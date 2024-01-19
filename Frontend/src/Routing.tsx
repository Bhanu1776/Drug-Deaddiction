import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Error from './components/Error';
import Signup from '@/pages/Signup/signup';
import Doctors from '@/pages/Doctor/Doctor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/doctors',
    element: <Doctors />,
  },
]);

const Routing = () => <RouterProvider router={router} />;

export default Routing;
