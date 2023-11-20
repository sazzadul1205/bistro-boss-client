import { useQuery } from "@tanstack/react-query";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: payment = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    });

    return (
        <div>
            <div>
                <SharedTitle
                    heading={'PAYMENT HISTORY'}
                    subHeading={'---At a Glance!---'}></SharedTitle>
            </div>
            <div className="ml-10">
                <div className="ml-10">
                    <h2 className="text-3xl font-bold">Total Payments: {payment.length}</h2>
                </div>
                <div className="overflow-x-auto ml-5">
                    <table className="table mt-9">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Email</th>
                                <th>price</th>
                                <th>Transaction Id</th>
                                <th>Payment Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payment.map((paymentItem, index) => (
                                    <tr key={paymentItem._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div>{paymentItem.email}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold"> $ {paymentItem.price}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{paymentItem.transactionID}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{paymentItem.date}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{paymentItem.status}</div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;