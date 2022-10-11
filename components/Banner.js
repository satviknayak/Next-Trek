import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import Image from "next/image";

import {Banners} from '../data/banner.js'

SwiperCore.use([Autoplay]);

export default function Banner(){
    return (
        <Swiper autoplay={{delay: 2000,disableOnInteraction: false,}} className="w-full h-[60vh] flex relative">
            {Banners.map((b) => (
                <SwiperSlide key={b.id} className="">
                    <Image layout="fill" className="absolute w-full h-full object-cover object-center" src={b.src} alt="banner__image" loading="eager"/>
                    <div className="bg-gradient-to-t from-teal-700 absolute h-20 left-0 right-0 bottom-0"></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}