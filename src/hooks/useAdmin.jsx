import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, isLoading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data:isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !isLoading,
        queryFn: async() => {
            // console.log('asking and talking token ');
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    
    })
    return [isAdmin,isAdminLoading];
};

export default useAdmin;