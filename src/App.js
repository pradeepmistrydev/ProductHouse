import Header from './components/header';
import HeroBanner from './components/hero_banner';
import Products from './components/products';
import React from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import CartPage from './components/CartPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/Register',
      element: <Register />,
    },
    {
      path: '/CartPage',
      element: <CartPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}>
        <Header />
        <HeroBanner />
        <Products />
        <Login />
        <CartPage />
        <Footer />
      </RouterProvider>
    </div>
  )
}

export default App;
