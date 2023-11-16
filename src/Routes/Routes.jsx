import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home"
import Menu from "../Pages/Menu/Menu/Menu"
import MainLayout from "../Layout/MainLayout";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/ele',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
    {
        path: "/login",
        element:<Login></Login>
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // admin routes
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>,
            }
        ]
    }
]);
