// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; // Import autoplay styles

// Import Swiper modules
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay settings
        >
            <SwiperSlide><img className='w-full h-48 md:h-[400px]' src="https://i.ibb.co/92KVCDG/3c2b446b-8e72-4614-9bd2-e66877879578-BD-1976-688-jpg-2200x2200q80.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-48 md:h-[400px]' src="https://i.ibb.co/qpzPzZM/16f8731e-2627-4e01-9b4a-39e222cd4c73-BD-1976-688-jpg-2200x2200q80.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-48 md:h-[400px]' src="https://i.ibb.co/Rz81pK9/31ce3308-e8a0-4937-bf77-6a16fb60a8c5-BD-1976-688-jpg-2200x2200q80.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-48 md:h-[400px]' src="https://i.ibb.co/j5jh0dF/c0caf9a0-b9b1-4ab6-8f53-2a06f68e1887-BD-1976-688-jpg-2200x2200q80.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-48 md:h-[400px]' src="https://i.ibb.co/wR6tpss/f74be013-768b-4f21-9d1f-652cf46c3f04-BD-1976-688-jpg-2200x2200q80.jpg" alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;
