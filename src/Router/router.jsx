


import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import HomeLayout from "../AllLayout/HomeLayout";
import CategoryNews from "../Component/CategoryNews";
import AuthLayout from "../Component/AuthLayout";
import LoginPage from "../Component/LoginPage";
import Register from "../Component/Register";
import NewsDetails from "../Component/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import AboutErr from "../Error/AboutErr";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children: [
        {
          path: '',
          element: <Navigate to={'/category/01'}></Navigate>
        },
        {
          path: '/category/:id',
          element: <CategoryNews></CategoryNews>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
      ]
    },
    {
      path: "/news/:id",
      
      element:<PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path: "/auth",
      element:<AuthLayout></AuthLayout>,
      children: [
        {
          path: '/auth/login',
          element:<LoginPage></LoginPage>,
        },
        {
          path: '/auth/register',
          element: <Register></Register>,
        },
      ]
    },
    {
      path: "*",
      element:<AboutErr></AboutErr>,
    },
  ]);

  export default router;