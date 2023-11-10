import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import sliderImg1 from '../../../assets/home/slide1.jpg'
import sliderImg2 from '../../../assets/home/slide2.jpg'
import sliderImg3 from '../../../assets/home/slide3.jpg'
import sliderImg4 from '../../../assets/home/slide4.jpg'
import sliderImg5 from '../../../assets/home/slide5.jpg'
import SharedTitle from '../../../Components/SharedTitle/SharedTitle';

const Category = () => {
    return (
        <div>
            <SharedTitle
                heading={'ORDER ONLINE'}
                subHeading={'---From 11:00am to 10:00pm---'}
            ></SharedTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={sliderImg1} />
                    <h3 className='text-4xl text-center -mt-16 pb-10'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg2} />
                    <h3 className='text-4xl text-center -mt-16 pb-10'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg3} />
                    <h3 className='text-4xl text-center -mt-16 pb-10'>Soup</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg4} />
                    <h3 className='text-4xl text-center -mt-16 pb-10'>Deserts</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg5} />
                    <h3 className='text-4xl text-center -mt-16 pb-10'>Salads</h3>

                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Category;