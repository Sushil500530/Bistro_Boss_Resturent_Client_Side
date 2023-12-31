import SectionTitle from "../category/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-opacity-10 pt-10 text-white">
            <SectionTitle
                subHeading={'check it out '}
                heading={'Featured item'}
            ></SectionTitle>
            <div className="md:flex md:items-center md:justify-center gap-8 lg:py-20 lg:px-28 bg-slate-600 bg-opacity-50 px-8 py-16">
                <div>
                    <img src={featured} alt="" className="rounded-md" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">March 20, 2023 <br /> WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className=" btn btn-outline  hover:text-yellow-300 border-0 border-b-4 text-white border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;