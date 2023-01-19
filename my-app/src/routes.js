import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import SignIn from './pages/SignIn';

// import dashBoard from './pages/dashBoard';
// import listing from './pages/listing';
// import calendar from './pages/calendar';
// import profil from './pages/profil';
// import signin from './pages/signin';
// import logIn from './pages/logIn';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        // { path: 'DB', element: <dashBoard /> },
        // { path: 'liste', element: <listing /> },
        // { path: 'calendrier', element: <calendar /> },
        // { path: 'profile', element: <profil /> },
        // { path: 'inscription', element: <signin /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },    
    {
      path: 'signin',
      element: <SignIn />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
