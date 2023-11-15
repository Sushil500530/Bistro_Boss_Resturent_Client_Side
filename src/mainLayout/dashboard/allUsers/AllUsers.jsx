import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import Swal from "sweetalert2";
const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    console.log(users);

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user?._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Selected Successfully",
                        icon: "success",
                        text: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.error(error))
    }

    const handleDelete = (user) => {
        console.log(user);
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
                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                timer: 1000
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h3 className="text-3xl font-bold text-center">Manage All Users</h3>
                <h3 className="text-3xl font-bold text-center">Total Users : {users?.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-[18px] font-bold table-zebra">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[17px] my-3">
                        {/* row 1 */}
                        {
                            users?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{
                                        user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="bg-[#D1A054] btn text-2xl text-white hover:text-black"><HiUserGroup /></button>
                                    }</td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn bg-red-600 text-2xl text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;