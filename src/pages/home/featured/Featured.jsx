import SectionTitle from "../category/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item py-10 text-white">
            <SectionTitle
                subHeading={'check it out '}
                heading={'Featured item'}
            ></SectionTitle>
            <div className="md:flex md:items-center md:justify-center gap-8 py-12 px-28 ">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">March 20, 2023 <br /> WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className=" btn btn-outline hover:bg-transparent hover:text-yellow-300 border-0 border-b-2 text-white border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;