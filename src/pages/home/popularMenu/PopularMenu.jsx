import { useEffect, useState } from "react";
import SectionTitle from "../category/SectionTitle";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
    const [menuData,setMenuData] = useState([])
    useEffect(() => {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenuData(popularItems)})
    },[])
    console.log(menuData);
    return (
        <section>
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Popular Menu'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 my-12">
                {
                    menuData?.map((item,idx) => <MenuItem
                    key={idx}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;