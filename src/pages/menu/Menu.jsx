import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import img from '../../assets/menu/banner3.jpg'
import PopularMenu from '../home/popularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | menu</title>
            </Helmet>
            <Cover img={img} coverTitle={'Our menu'}></Cover>
            <p>out menu</p>
            <PopularMenu></PopularMenu>
            <Cover img={img} coverTitle={'Our menu'}></Cover>
            <p>out menu</p>
            <PopularMenu></PopularMenu>
            <Cover img={img} coverTitle={'Our menu'}></Cover>
            <p>out menu</p>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;