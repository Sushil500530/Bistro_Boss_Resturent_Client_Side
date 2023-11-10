/* eslint-disable react/prop-types */

import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";


const MenuCategory = ({ items,coverTitle,coverImage }) => {
    return (
        <div className="pt-4">
           {coverTitle && <Cover img={coverImage} coverTitle={coverTitle}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 my-12 p-5">
                {
                    items?.map((item, idx) => <MenuItem
                        key={idx}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;