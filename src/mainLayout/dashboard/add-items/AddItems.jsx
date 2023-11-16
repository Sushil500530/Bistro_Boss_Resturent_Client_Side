import { useForm } from "react-hook-form";
import SectionTitle from "../../../pages/home/category/SectionTitle";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <SectionTitle heading={'Add an items'} subHeading={"What's a New"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <select {...register('category')} className="select select-primary w-full max-w-xs">
                        <option disabled selected>Select  Categories</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddItems;