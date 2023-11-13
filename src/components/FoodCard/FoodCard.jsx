/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id} = item || {};
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // ToTo alern dite pari 
            const cartItem = {
                menuId : _id,
                email:user.email,
                name,
                image,
                price
            }
            axios.post("http://localhost:5000/carts", cartItem)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        title: `${name} Added to Your Cart...!`,
                        text: "You clicked the button!",
                        icon: "success",
                        timer:1500
                      });
                }
            })
            

        }
        else {
            Swal.fire({
                title: "you are not login, please Login first..!",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                // send to the login page 
                return navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div className="card bg-[#eaeaeb] shadow-xl">
            <figure>
                <img src={image} alt="image" className="rounded-xl w-full h-[300px]" />
            </figure>
            <p className="bg-slate-900 text-white px-3 right-5 top-5 py-1 absolute">$ {price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className=" btn btn-outline  hover:text-yellow-300 border-0 text-[#BB8506] border-b-4 border-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;