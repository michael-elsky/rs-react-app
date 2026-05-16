import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Page404 from './pages/404/Page404';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'films/:itemId', element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },

  { path: '*', element: <Page404 /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
