import { BsFillTrash3Fill } from "react-icons/bs";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            cancelButtonColor: "#eb2c1e",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            console.log(res);
                            refetch()
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your Item has been deleted.',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1000,
                            });
                            console.log(res.data);
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
            <SharedTitle heading={"MANAGE ALL ITEMS"} subHeading={"---Hurry Up!---"}></SharedTitle>
            <div className="ml-10">
                <div className="ml-10">
                    <h2 className="text-3xl font-bold">Total Users : {menu.length}</h2>
                </div>
                <div className="overflow-x-auto ml-5">

                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <th>
                                            <Link to={`/dashboard/updateItems/${item._id}`}>
                                                <button className="btn btn-error bg-[#D1A054]  border-none hover:bg-[#e69517]"><FaRegEdit className="text-xl"></FaRegEdit></button>
                                            </Link>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDeleteItem(item)} className="btn  btn-error "><BsFillTrash3Fill className="text-xl"></BsFillTrash3Fill></button>
                                        </th>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default ManageItems;