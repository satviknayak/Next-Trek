import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper/core';
import Image from "next/image";

import {Banners} from '../data/banner.js'
import "swiper/css/bundle";
import "swiper/css";


SwiperCore.use([Autoplay]);

export default function Banner(){
    return (
        <Swiper autoplay={{delay:3000,disableOnInteraction:true}} className="h-[50vh] md:h-[75vh] relative flex w-full" >
            {Banners.map((b)=>(
                <SwiperSlide key={b.id}>
                    <Image layout="fill" src={b.src} alt="banner_image" className="absolute object-cover w-full h-full object-center" />
                    <div className='bg-gradient-to-t from-teal-600 flex w-full h-[3rem] absolute bottom-0'></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}