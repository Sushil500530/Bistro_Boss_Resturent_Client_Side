
import { createBrowserRouter } from 'react-router-dom';
import Root from '../mainLayout/Root';
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu';
import Order from '../pages/order/Order';
import ErrorPage from '../error/ErrorPage';

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
            path:'order',
            element:<Order></Order>
           }
        ]
    }
])

export default Router;