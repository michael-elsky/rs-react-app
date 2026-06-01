import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/Home'
import Layout from './pages/Layout/Layout'
import Page404 from './pages/404/Page404'
import About from './pages/About/About'
import RouterError from './components/RouterError/RouterError'
import ResultDetails from './components/Result/ResultDetail/RenderDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouterError />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'films/:itemId',
            element: <ResultDetails />,
          },
        ],
      },
      { path: 'about', element: <About /> },
      { path: '*', element: <Page404 /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
