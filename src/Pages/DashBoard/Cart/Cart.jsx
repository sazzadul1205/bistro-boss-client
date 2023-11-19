import { BsFillTrash3Fill } from "react-icons/bs";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            cancelButtonColor: "#eb2c1e",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            console.log(res);
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your data has been deleted.',
                                icon: 'success',
                            });
                        }
                    })

                // Show success alert
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Show cancel alert
                Swal.fire({
                    title: 'Cancelled',
                    text: 'Your data is safe :)',
                    icon: 'error',
                });
            }
        });
    };

    return (
        <div>
            <SharedTitle heading={'WANNA ADD MORE?'} subHeading={'---My Cart---'}></SharedTitle>
            <div className="flex justify-evenly text-center ml-10">
                <h1 className="text-2xl font-bold">Total Payments: {cart.length}</h1>
                <h3 className="text-2xl font-bold">total price: $ {totalPrice}</h3>
                {
                    cart.length ?
                        <Link to={'/dashboard/payment'}>
                            <button className="btn btn-primary bg-[#D1A054]">Pay</button>
                        </Link> :
                        <button disabled className="btn btn-primary bg-[#D1A054]">Pay</button>
                }

            </div>
            <div>
                <div className="overflow-x-auto ml-5">
                    <table className="table mt-9">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{item.name}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold">$ {item.price}</div>
                                        </td>

                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-error "><BsFillTrash3Fill></BsFillTrash3Fill></button>
                                        </th>
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

export default Cart;