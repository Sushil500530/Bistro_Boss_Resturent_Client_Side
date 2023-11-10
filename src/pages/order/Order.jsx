import orderCover from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Cover from '../shared/Cover';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/FoodCard/FoodCard';


const Order = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const offereds = menu.filter(item => item.category === 'offered')
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Cover img={orderCover} coverTitle={"Order Food"}></Cover>
            <div className='my-8'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab> <span className="text-xl font-bold">Salad</span></Tab>
                        <Tab> <span className="text-xl font-bold">Pizza</span></Tab>
                        <Tab> <span className="text-xl font-bold">Soup</span></Tab>
                        <Tab> <span className="text-xl font-bold">Pizza</span></Tab>
                        <Tab> <span className="text-xl font-bold">Dessert</span></Tab>
                        <Tab> <span className="text-xl font-bold">Drinks</span></Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 m-5">
                            {
                                salads?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;