import { useQuery } from "@tanstack/react-query";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });
    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
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

    const handleMakeAdmin = (user) => {
        // Show confirmation dialog before making the user an admin
        Swal.fire({
            title: 'Are you sure?',
            text: 'This will make the user an admin.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, make admin!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // User clicked "Yes"
                axiosSecure
                    .patch(`/users/admin/${user._id}`)

                    .then((res) => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            // Show success notification
                            Swal.fire({
                                icon: 'success',
                                title: `User Role Updated!`,
                                text: `The user ${user.name} is now an admin.`,
                            });
                        } else {
                            // Show error notification
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'Failed to update user role.',
                            });
                        }
                    })
                    .catch((error) => {
                        // Show error notification for network or other errors
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to update user role. Please try again later.',
                        });
                        console.error('Error updating user role:', error);
                    });
            } else {
                // User clicked "Cancel" or closed the dialog
                Swal.fire('Cancelled', 'User role update was cancelled.', 'info');
            }
        });
    };



    return (
        <div>
            <SharedTitle
                heading={'MANAGE ALL USERS'}
                subHeading={'---How many??---'}
            ></SharedTitle>

            <div className="ml-10">
                <div className="ml-10">
                    <h2 className="text-3xl font-bold">Total Users : {users.length}</h2>
                </div>

                <div className="overflow-x-auto ml-5">
                    <table className="table mt-9">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="font-bold">{user.name}</div>
                                        </td>
                                        <td>
                                            <div className="font-bold"> {user.email}</div>
                                        </td>
                                        {user.role === 'admin' ?
                                            <th>
                                                <p className="mt-7">Admin</p>
                                            </th>
                                            : <th>
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-error bg-[#D1A054]  border-none hover:bg-[#e69517]"><FaUsers></FaUsers></button>
                                            </th>}
                                        <th>
                                            <button onClick={() => handleDeleteUser(user._id)} className="btn btn-error "><BsFillTrash3Fill></BsFillTrash3Fill></button>
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

export default AllUsers;
