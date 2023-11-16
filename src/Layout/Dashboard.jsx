import { BsFillCartFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { CiWallet } from "react-icons/ci";
import { AiFillHome, AiOutlineMail, AiOutlineMenu, AiOutlineUnorderedList, AiFillShopping } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUsers, FaUtensils } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();


    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (

        <div className="max-w-screen-xl mx-auto flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to={'/dashboard/adminHome'}>
                                        <AiFillHome></AiFillHome>
                                        ADMIN HOME
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addItems'}>
                                        <FaUtensils></FaUtensils>
                                        ADD ITEMS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageItem'}>
                                        <TfiMenuAlt></TfiMenuAlt>
                                        MANAGE ITEMS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageBooking'}>
                                        <FaBook></FaBook>
                                        MANAGE BOOKING
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allUsers'}>
                                        <FaUsers></FaUsers>
                                        ALL USERS
                                    </NavLink>
                                </li>

                            </>
                            :
                            <>
                                <li>
                                    <NavLink to={'/dashboard/userHome'}>
                                        <AiFillHome></AiFillHome>
                                        USER HOME
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/reservation'}>
                                        <CiWallet></CiWallet>
                                        RESERVATION
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/history'}>
                                        <BsFillCartFill ></BsFillCartFill>
                                        PAYMENT HISTORY
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/cart'}>
                                        <BsFillCartFill></BsFillCartFill>
                                        MY CART : {cart.length}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/review'}>
                                        <GoCodeReview></GoCodeReview>
                                        ADD REVIEW
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/booking'}>
                                        <AiOutlineUnorderedList></AiOutlineUnorderedList>
                                        MY BOOKING
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider  ">OR</div>
                    {/* shared nav link */}
                    <li>
                        <NavLink to={'/'}>
                            <AiFillHome></AiFillHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}>
                            <AiOutlineMenu></AiOutlineMenu>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order'}>
                            <AiFillShopping></AiFillShopping>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/booking'}>
                            <AiOutlineMail></AiOutlineMail>
                            contact
                        </NavLink>
                    </li>

                </ul>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;