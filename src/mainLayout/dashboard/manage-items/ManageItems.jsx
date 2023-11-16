import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../pages/home/category/SectionTitle";

const ManageItems = () => {
    const [menu] = useMenu();
    console.log(menu);


    const handleUpdateItem = (item) => {
        console.log(item);
    }

    const handleDeletItem = (item) => {
        console.log(item);
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
                            menu?.map((item,index) =>
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
                                    <button onClick={() =>handleUpdateItem(item)} className="btn bg-[#D1A054] text-2xl text-white hover:text-black"><FaRegEdit ></FaRegEdit></button>
                                </td>
                                <th>
                                    <button onClick={() =>handleDeletItem(item)} className="btn bg-red-600 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
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