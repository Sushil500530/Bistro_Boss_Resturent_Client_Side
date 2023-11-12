
import { createBrowserRouter } from 'react-router-dom';
import Root from '../mainLayout/Root';
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu';
import Order from '../pages/order/Order';
import ErrorPage from '../error/ErrorPage';
import Login from '../pages/login/Login';
import Resister from '../pages/resister/Resister';

const Router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           {
            path:'our-menu',
            element:<Menu></Menu>
           },
           {
            path:'order/:category',
            element:<Order></Order>
           },
            {
            path:'/login',
            element:<Login></Login>
        },
        ]
    },
   
    {
        path:'/resister',
        element:<Resister></Resister>
    }
])

export default Router;