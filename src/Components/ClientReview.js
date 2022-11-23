import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
const ClientReview = () => {
    let profileImg = 'https://source.unsplash.com/500x300/?web-development';
    return (
        <div>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            modules={[Pagination, Navigation]}
            className='mySwiper h-1/4  w-full p-12'>

            <SwiperSlide>
                <div className='bg-primary-50 rounded-lg p-7 w-[18rem]'>
                    <img
                        className='mx-auto my-4 rounded-xl'
                        src={profileImg}
                        alt=''
                    />
                    <p className='text-neutral-900 text-center leading-relaxed'>
                        "techmart is unarguably the best
                        eccomerce platform - a great
                        transforation to Africa"
                    </p>
                    <h5 className='text-xl font-semibold text-center mt-5'>
                        Aisha Issa
                    </h5>
                    <p className='text-center w-fit mx-auto'>
                        techmart Vendor
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                    <img
                        className='mx-auto my-4 rounded-xl'
                        src={profileImg}
                        alt=''
                    />
                    <p className='text-neutral-900 text-center leading-relaxed'>
                        "techmart is unarguably the best
                        eccomerce platform - a great
                        transforation to Africa"
                    </p>
                    <h5 className='text-xl font-semibold text-center mt-5'>
                        Aisha Issa
                    </h5>
                    <p className='text-center w-fit mx-auto'>
                        techmart Vendor
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                    <img
                        className='mx-auto my-4 rounded-xl'
                        src={profileImg}
                        alt=''
                    />
                    <p className='text-neutral-900 text-center leading-relaxed'>
                        "techmart is unarguably the best
                        eccomerce platform - a great
                        transforation to Africa"
                    </p>
                    <h5 className='text-xl font-semibold text-center mt-5'>
                        Aisha Issa
                    </h5>
                    <p className='text-center w-fit mx-auto'>
                        techmart Vendor
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                    <img
                        className='mx-auto my-4 rounded-xl'
                        src={profileImg}
                        alt=''
                    />
                    <p className='text-neutral-900 text-center leading-relaxed'>
                        "techmart is unarguably the best
                        eccomerce platform - a great
                        transforation to Africa"
                    </p>
                    <h5 className='text-xl font-semibold text-center mt-5'>
                        Aisha Issa
                    </h5>
                    <p className='text-center w-fit mx-auto'>
                        techmart Vendor
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                    <img
                        className='mx-auto my-4 rounded-xl'
                        src={profileImg}
                        alt=''
                    />
                    <p className='text-neutral-900 text-center leading-relaxed'>
                        "techmart is unarguably the best
                        eccomerce platform - a great
                        transforation to Africa"
                    </p>
                    <h5 className='text-xl font-semibold text-center mt-5'>
                        Aisha Issa
                    </h5>
                    <p className='text-center w-fit mx-auto'>
                        techmart Vendor
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-primary-50 rounded-lg p-7 w-[18rem] '>
                    <img
                        className='mx-auto my-4 rounded-xl'
                        src={profileImg}
                        alt=''
                    />
                    <p className='text-neutral-900 text-center leading-relaxed'>
                        "techmart is unarguably the best
                        eccomerce platform - a great
                        transforation to Africa"
                    </p>
                    <h5 className='text-xl font-semibold text-center mt-5'>
                        Aisha Issa
                    </h5>
                    <p className='text-center w-fit mx-auto'>
                        techmart Vendor
                    </p>
                </div>
            </SwiperSlide>
        </Swiper></div>
    )
}

export default ClientReview