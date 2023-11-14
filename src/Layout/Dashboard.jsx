import { BsFillCartFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiFillShopping, AiOutlineMail, AiOutlineMenu, AiOutlineUnorderedList, AiTwotoneCalendar } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    return (
        
        <div className="max-w-screen-xl mx-auto flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    <li>
                        <NavLink to={'/dashboard/userHome'}>
                            <AiFillHome></AiFillHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}>
                            <AiTwotoneCalendar></AiTwotoneCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}>
                            <BsFillCartFill className="mr-5"></BsFillCartFill>
                            My cart : {cart.length}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}>
                            <GoCodeReview></GoCodeReview>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/booking'}>
                            <AiOutlineUnorderedList></AiOutlineUnorderedList>
                            my booking
                        </NavLink>
                    </li>

                    <div className="divider  ">OR</div>

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
                        <NavLink to={'/dashboard/booking'}>
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