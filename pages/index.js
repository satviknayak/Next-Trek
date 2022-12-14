import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' 

import { BsChevronDoubleDown } from "react-icons/bs";


import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <div className='bg-banner-light  w-full h-screen flex relative'>
        <div className='flex flex-col w-full md:w-[50%] h-fit md:my-auto my-0 mt-[100px] md:ml-[50px] ml-0 px-[15px] md:px-0'>
          <h3 className=''>NEXT-TREK</h3>
          <h1 className='text-[2.5rem] w-[300px] font-extrabold my-[10px]'>NEVER STOP EXPLORING THE WORLD</h1>
          <p className='w-[300px] mb-[50px] mt-[10px]'>It is in our nature to explore, to reach out into the unknown. The only true failure would be not to explore at all.</p>
        </div>
        <div className='w-full absolute bottom-[3rem] text-white text-[3rem]'><BsChevronDoubleDown className='m-auto'/></div>   
      </div>
      
      <div className='flex flex-col md:w-[80%] w-full px-[20px] text-slate-900 min-h-[450px] m-auto pt-[30px] relative'>
        <h1 className='md:text-center text-left ml-[20px] md:ml-0 text-[2.5rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Travel Destinations</h1>
        <div className='w-full flex overflow-x-auto mt-[40px] pb-[20px]'>

        </div>
      </div>
      
      
      <div className='flex flex-col md:w-[80%] w-full px-[20px] text-slate-900 min-h-[300px] m-auto pt-[30px] relative'>
        <h1 className='md:text-center text-left ml-[20px] md:ml-0 text-[2.5rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Travel Blogs</h1>
        <div className='w-full flex overflow-x-auto mt-[40px] pb-[20px]'>

        </div>
      </div>

    </div>
  );
}
