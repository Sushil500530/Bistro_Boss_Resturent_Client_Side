/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item || {};
    return (
        <div className=" flex space-x-6 p-5">
            <img  style={{borderRadius:'0 200px 200px 200px'}} src={image} className="w-[120px] " alt="" />
            <div className="">
            <h3 className="uppercase text-[#151515] top-50 left-
            30 flex-1 ">{name}----------</h3>
            <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] w-1/12">$ {price}</p>
        </div>
    );
};

export default MenuItem;