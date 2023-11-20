import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res?.data;
        }
    })

    console.log(Object.keys(payments).join(','));
    return (
        <div>
            <h3 className="text-3xl font-bold ">Total Payment {payments?.length}</h3>
            <div className="overflow-x-auto mt-12">
                <table className="table">
                    {/* head */}
                    <thead className="text-[18px] font-bold bg-base-200">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            {/* <th>Category</th> */}
                            <th>Total Price</th>
                            <th>Payment Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                            payments?.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item?.email}</td>
                                    {/* <td>{item?.category}</td> */}
                                    <td className="pl-10">{item?.price}</td>
                                    <td>{item?.date} </td>
                                    <td>{item?.status}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;