import { Link } from "react-router-dom";
import Cover from "../../../Components/Cover/Cover";
import MenuItem from "../../../Components/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-2 my-16">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 px-10 text-[#BB8506]">
                        Order Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
