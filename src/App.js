import Products from './components/Products';
import React from 'react';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import CartPage from './components/CartPage';
import ProductCheckout from './components/ProductCheckout';
import ProductsCategory from './components/ProductsCategory';
import Root from './components/Root';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/CartPage',
          element: <CartPage />,
        },
        {
          path: '/ProductsCategory',
          element: <ProductsCategory />,
        },
        {
          path: '/ProductCheckout',
          element: <ProductCheckout />,
        },
      ]
    },
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/Register',
      element: <Register />,
    },

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
