import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddCart from "./component/AddCart/AddCart.jsx";
import Home from "./component/Home/Home.jsx";
import MainLayout from "./component/MainLayout/MainLayout.jsx";
import BrandDetails from "./component/BrandPages/BrandDetails.jsx";
import CardData from "./component/CardData/CardData.jsx";
import CarDetailsMap from "./component/CarDetailsPage/CarDetailsMap.jsx";
import SignIn from "./component/Signup/SignIn.jsx";
import SignUp from "./component/Signup/SignUp.jsx";
import AuthProvider from "./component/Provider/AuthProvider.jsx";
import Blog from "./component/Blog/Blog.jsx";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute.jsx";
import UpdateCart from "./component/UpdateCart/UpdateCart.jsx";
import MyCart from "./component/MyCart/MyCart.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage";
// import UserInfo from "./component/Navbar/UserInfo";
// import UserInfoMap from "./component/Navbar/UserInfoMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://project-mongodb.vercel.app/cartCategory`)
      },
      {
        path: "/AddCart",
        element: <AddCart></AddCart>,
      },
      // {
      //  path: "/userinfo",
      //  element: <UserInfo></UserInfo>,
      //  loader: ({params}) => fetch(`https://project-mongodb.vercel.app/user/${params.id}`)
      // },
      {
        path: "/branddetails/:brandName",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`https://project-mongodb.vercel.app/cart/${params.brandName}`)
      },
      {
        path: "/",
        element: <CardData></CardData>,
        loader: () => fetch(`https://project-mongodb.vercel.app/cart`),
      },
      {
        path: "/carDetails/:id",
        element: <PrivateRoute><CarDetailsMap></CarDetailsMap></PrivateRoute>,
        loader: ({params}) => fetch(`https://project-mongodb.vercel.app/cart/details/${params.id}`)
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,

      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/Updatecart/:id",
        element: <UpdateCart></UpdateCart>,
        loader: ({params}) => fetch(`https://project-mongodb.vercel.app/cart/details/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
