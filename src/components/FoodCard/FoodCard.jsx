/* eslint-disable react/prop-types */

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item || {};
    return (
        <div className="card bg-blue-50 shadow-xl">
            <figure>
                <img src={image} alt="image" className="rounded-xl w-full h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className=" btn btn-outline  hover:text-yellow-300 border-0 text-[#BB8506] border-b-4 border-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;