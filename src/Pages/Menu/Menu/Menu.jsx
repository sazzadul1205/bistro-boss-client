import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Cover/Cover";
import pageBanner from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../Hooks/useMenu";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={pageBanner} title={'OUR MENU'}></Cover>
            {/* Main Cover */}
            <SharedTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SharedTitle>
            {/* Offered Items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert items */}
            <MenuCategory
                items={dessert}
                title={'desert'}
                coverImg={dessertImg}
            ></MenuCategory>
            {/* pizza items */}
            <MenuCategory
                items={pizza}
                title={'pizza'}
                coverImg={pizzaImg}
            ></MenuCategory>
            {/* desert items */}
            <MenuCategory
                items={salad}
                title={'salad'}
                coverImg={saladImg}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title={'soup'}
                coverImg={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;