import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import img from '../../assets/menu/banner3.jpg'
import imgDessert from '../../assets/menu/dessert-bg.jpeg'
import imgPizza from '../../assets/menu/pizza-bg.jpg'
import imgSoup from '../../assets/menu/soup-bg.jpg'
import imgSalad from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../home/category/SectionTitle';
import MenuCategory from './manu-Category/MenuCategory';
const  Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const offereds = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | menu</title>
            </Helmet>
            <Cover img={img} coverTitle={'Our menu'}></Cover>
            {/* main cover */}
            <SectionTitle subHeading={`Don't miss`} heading={`TODAY'S OFFER`}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offereds}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory items={desserts} coverTitle='dessert' coverImage={imgDessert}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizzas} coverTitle='pizza' coverImage={imgPizza}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salads} coverTitle='salad' coverImage={imgSalad}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soups} coverTitle='soup'  coverImage={imgSoup}></MenuCategory>
        </div>
    );
};

export default Menu;