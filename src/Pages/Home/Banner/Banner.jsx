import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import sliderImg1 from '../../../assets/home/01.jpg'
import sliderImg2 from '../../../assets/home/02.jpg'
import sliderImg3 from '../../../assets/home/03.png'
import sliderImg4 from '../../../assets/home/04.jpg'
import sliderImg5 from '../../../assets/home/05.png'
import sliderImg6 from '../../../assets/home/06.png'

const Banner = () => {
    const carouselSettings = {
        showArrows: true,
        showStatus: false,
        showIndicators: true,
        infiniteLoop: true,
        autoPlay: true,
        interval: 3000,
        stopOnHover: true,
        transitionTime: 500,
    };

    return (
        <div >
            <Carousel {...carouselSettings}>
                <div>
                    <img src={sliderImg1} alt="Slide 1" />
                </div>
                <div>
                    <img src={sliderImg2} alt="Slide 2" />
                </div>
                <div>
                    <img src={sliderImg3} alt="Slide 3" />
                </div>
                <div>
                    <img src={sliderImg4} alt="Slide 4" />
                </div>
                <div>
                    <img src={sliderImg5} alt="Slide 5" />
                </div>
                <div>
                    <img src={sliderImg6} alt="Slide 6" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
