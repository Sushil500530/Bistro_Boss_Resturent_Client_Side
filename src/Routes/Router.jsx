
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
import AddItems from '../mainLayout/dashboard/add-items/AddItems';
import AdminRoute from '../mainLayout/dashboard/AdminRoute';
import ManageItems from '../mainLayout/dashboard/manage-items/ManageItems';
import UpdateItem from '../mainLayout/dashboard/update-item/UpdateItem';

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

    // dashboard start
    {
        path: '/dashboard',
        element: <PriveteRoute><Dashboard></Dashboard></PriveteRoute>,
        children: [
            {
                path: '/dashboard/mycart',
                element: <MyCart></MyCart>
            },
            {
                path: '/dashboard/all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            // admin only
            {
                path: '/dashboard/add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: '/dashboard/manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: '/dashboard/update-item/:id',
                loader : ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
            }
        ]
    }
])

export default Router;