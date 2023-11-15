import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users}  =useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data ;
        }
    })
    console.log(users);
    return (
        <div>
           <div className="flex justify-evenly my-4">
           <h3 className="text-3xl font-bold text-center">Manage All Users</h3>
            <h3 className="text-3xl font-bold text-center">Total Users : {users?.length}</h3>
           </div>
            
        </div>
    );
};

export default AllUsers;