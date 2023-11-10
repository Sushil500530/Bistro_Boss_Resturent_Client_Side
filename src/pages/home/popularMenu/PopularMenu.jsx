import { useEffect, useState } from "react";
import SectionTitle from "../category/SectionTitle";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
    const [menuData, setMenuData] = useState([])
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenuData(popularItems)
            })
    }, [])
    // console.log(menuData);
    return (
        <section>
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Menu'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 my-12 p-5">
                {
                    menuData?.map((item, idx) => <MenuItem
                        key={idx}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="w-full flex items-center justify-center mb-12">
                <button className=" btn btn-outline  hover:text-yellow-300 border-0 border-b-4 border-black">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;