import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <>
            <div className='text-center my-8'>
                <hr className='w-1/2 border-2 mx-auto border-gray-300' />
                <h1 className='text-[40px] font-bold py-2'>ORDER ONLINE</h1>
                <hr className='w-1/2 border-2 mx-auto border-gray-300' />
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide className='relative'><img src={slide1} alt="slider" />
                    <h1 className='text-4xl font-semibold -mt-12 text-center text-gray-100'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="slider" />
                    <h1 className='text-4xl font-semibold -mt-12 text-center text-gray-100'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} alt="slider" />
                    <h1 className='text-4xl font-semibold -mt-12 text-center text-gray-100'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} alt="slider" />
                    <h1 className='text-4xl font-semibold -mt-12 text-center text-gray-100'>desserts</h1>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="slider" />
                    <h1 className='text-4xl font-semibold -mt-12 text-center text-gray-100'>Salads</h1>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Category;