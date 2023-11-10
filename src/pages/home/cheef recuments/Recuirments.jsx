import SectionTitle from "../category/SectionTitle";
import image from '../../../assets/home/slide1.jpg'
const Recuirments = () => {
    return (
        <section className="mb-20">
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-blue-50 shadow-xl">
                    <figure>
                        <img src={image} alt="image" className="rounded-xl w-full h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                        <div className="card-actions">
                        <button className=" btn btn-outline  hover:text-yellow-300 border-0 text-[#BB8506] border-b-4 border-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-blue-50 shadow-xl">
                    <figure>
                        <img src={image} alt="image" className="rounded-xl w-full h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                        <div className="card-actions">
                        <button className=" btn btn-outline  hover:text-yellow-300 border-0 text-[#BB8506] bg-black">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-blue-50 shadow-xl">
                    <figure>
                        <img src={image} alt="image" className="rounded-xl w-full h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                        <div className="card-actions">
                        <button className=" btn btn-outline  hover:text-yellow-300 border-0 text-[#BB8506] border-b-4 border-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recuirments;