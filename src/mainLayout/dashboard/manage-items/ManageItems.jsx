import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../pages/home/category/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, refetch, loading] = useMenu();
    const axiosSecure = useAxiosSecure();

    if (loading) {
        return <div className="loading-spinner"></div>
    }

    const handleDeletItem = (item) => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item?._id}`)
                console.log(res.data);
                if (res.data?.deletedCount > 0) {
                    // refetch data 
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item?.name} has been deleted.`,
                        icon: "success",
                        timer: 1000
                    });
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle subHeading={'Hurry Up'} heading={'Manage All Items'}></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-[18px] font-bold">
                        <tr>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu?.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.name}</td>
                                    <td className="text-center">$ {item?.price}</td>
                                    <td>
                                     <Link to={`/dashboard/update-item/${item?._id}`}>
                                     <button className="btn bg-[#D1A054] text-2xl text-white hover:text-black"><FaRegEdit ></FaRegEdit></button>
                                     </Link>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDeletItem(item)} className="btn bg-red-600 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;