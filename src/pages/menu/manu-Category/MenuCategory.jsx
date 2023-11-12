/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";


const MenuCategory = ({ items, coverTitle, coverImage }) => {
    return (
        <div className="pt-4 mb-12">
            {coverTitle && <Cover img={coverImage} coverTitle={coverTitle}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 mt-12 p-5">
                {
                    items?.map((item, idx) => <MenuItem
                        key={idx}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${coverTitle}`}>
                <button className=" btn btn-outline  hover:text-yellow-300 border-0 border-b-4 border-black ml-10">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;