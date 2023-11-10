import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import featured from '../../../assets/home/featured.jpg'
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <div className="featured-item bg-fixed text-white ">
            <SharedTitle
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></SharedTitle>
            <div className="md:flex md:gap-9 justify-center items-center bg-slate-500 bg-opacity-40 pb-20 px-36">
                <div>
                    <img src={featured} />
                </div>
                <div className="my-auto text-white">
                    <h1>
                        March 20, 2023
                    </h1>
                    <h1>
                        WHERE CAN I GET SOME?
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 text-black"> Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedItem;