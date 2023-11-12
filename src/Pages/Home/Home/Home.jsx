import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Category from "../Category/Category";
import ChefsReco from "../ChefsReco/ChefsReco";
import Contact from "../Contact/Contact";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../Menu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Card></Card>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefsReco></ChefsReco>
            <FeaturedItem></FeaturedItem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;