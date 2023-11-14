import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from "react-router-dom"
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()


    const handleAddToCart = () => {
        if (user && user.email) {
            // Process for adding to cart or DB

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/cart', cartItem)
                .then((res) => {
                    console.log(res);
                    if (res.data.insertedId) {

                        Swal.fire({
                            icon: 'success',
                            title: `${name} Added to Cart`,
                            text: 'The item has been added to your cart successfully.',
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        // refetch the cart to update the cart
                        refetch()
                    }
                })

        } else {
            // If the user is not logged in, show a sweet alert and navigate to the login page
            Swal.fire({
                icon: 'error',
                title: 'Not Logged In',
                text: 'Please log in to add items to your cart.',
                confirmButtonText: "Login",
                confirmButtonColor: '#7AE582',
                showCancelButton: true,
                cancelButtonColor: '#D11A2A'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login', { state: { from: location } })
                    }
                })
        }
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white text-lg">~ $ {price} ~</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline border-0 border-b-4 mt-4 text-[#BB8506]"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
