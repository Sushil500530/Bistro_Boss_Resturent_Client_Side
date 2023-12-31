import { useForm } from "react-hook-form";
import SectionTitle from "../../../pages/home/category/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url 
        const imageFile = { image: data?.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data?.success) {
            // now set the menu item data to the server with the image
            const menuItem = {
                name: data?.name,
                category: data?.category,
                price: parseFloat(data?.price),
                recipe: data?.recipe,
                image: res.data?.data?.display_url
            }

            // now set database
            const menuResponse = await axiosSecure.post('/menu',menuItem);
            console.log('database response',menuResponse);
            if(menuResponse.data?.insertedId){
                reset();
                // show success popup
                Swal.fire({
                    title: "Added Successfully",
                    text: `${data?.name} is added to the menu.`,
                    icon: "success"
                  });

            }
            // console.log('without database',res.data);

        }
        console.log(res.data);
    }

    return (
        <div>
            <SectionTitle heading={'Add an items'} subHeading={"What's a New"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Recipie name?</span>
                        </label>
                        <input type="text" placeholder="Recipie Name....."
                            {...register('name', { required: true })}
                            className="input select-primary w-full" />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-full flex-1">
                            <label className="label">
                                <span className="label-text">Recipie Category</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })} className="select select-primary w-full">
                                <option disabled value="default" >Select  Categories</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="flex-1 form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price"
                                {...register('price', { required: true })}
                                className="input select-primary w-full" />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea className="textarea select-primary h-[15vh] w-full " placeholder="Recipe Details"
                            {...register('recipe', { required: true })}
                        ></textarea>

                        <input className="my-2 p-3 w-full max-w-xs" type="file" {...register('image', { required: true })} name="image" id="" />
                    </div>
                    <button className="btn btn-success px-8 mb-2  capitalize text-[18px] hover:text-white">
                        Add Item <FaUtensils className="text-3xl"></FaUtensils>
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;