
import { createBrowserRouter } from 'react-router-dom';
import Root from '../mainLayout/Root';
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu';
import Order from '../pages/order/Order';
import ErrorPage from '../error/ErrorPage';
import Login from '../pages/login/Login';
import Resister from '../pages/resister/Resister';
import PriveteRoute from './PriveteRoute';
import Secret from '../pages/shared/secret/Secret';
import Dashboard from '../mainLayout/dashboard/Dashboard';
import MyCart from '../mainLayout/dashboard/cart/MyCart';
import AllUsers from '../mainLayout/dashboard/allUsers/AllUsers';

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'our-menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'secret',
                element: <PriveteRoute><Secret></Secret></PriveteRoute>
            },
        ]
    },

    {
        path: '/resister',
        element: <Resister></Resister>
    },
    {
        path: '/dashboard',
        element: <PriveteRoute><Dashboard></Dashboard></PriveteRoute>,
        children:[
            {
                path:'/dashboard/mycart',
                element:<MyCart></MyCart>
        },
            {
                path:'/dashboard/all-users',
                element:<AllUsers></AllUsers>
        }
    ]
    }
])

export default Router;