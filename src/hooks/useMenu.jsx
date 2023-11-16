// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menuData, setMenuData] = useState([]);
    // const [loading,setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenuData(data)
    //             setLoading(false)
    //         })
    // }, [])

    const {data:menuData = [] ,refetch, isPending:loading} = useQuery({
        queryKey:['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })

    return [menuData, refetch, loading]
};

export default useMenu;