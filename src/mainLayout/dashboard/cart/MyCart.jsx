import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyCart = () => {
    const [carts, refetch] = useCarts();
    const totalPrice = carts.reduce((total, currentItem) => total + currentItem.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1000
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly mb-5">
                <h1 className="text-2xl font-bold text-center">Items: {carts?.length}</h1>
                <h1 className="text-2xl font-bold text-center">Total Price: {totalPrice}</h1>
                <button className="btn">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-[18px] font-bold">
                        <tr>
                            <th> Number</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            carts?.map((item, index) => <tr key={item?._id}>
                                <th> {index + 1} </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <th>
                                    {item?.name}
                                </th>
                                <td>$ {item?.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item?._id)} className="btn bg-red-600 text-2xl text-white hover:text-black "><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;