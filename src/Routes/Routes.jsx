import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home"
import Menu from "../Pages/Menu/Menu/Menu"
import MainLayout from "../Layout/MainLayout";
import Order from "../Pages/Order/Order/Order";


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
            }
        ]
    },
]);
