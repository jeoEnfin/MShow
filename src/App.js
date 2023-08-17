import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import RootLayout from './pages/Root';
import Favorite from './pages/Favorite';
import ErrorPage from './pages/Error';
import About from './pages/About';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/favorite',
          element: <Favorite />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
