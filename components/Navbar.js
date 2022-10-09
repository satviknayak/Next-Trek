import React from 'react'
import { useState,useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [Bg, setBG] = useState(false);
  const [navShow,setNavShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBG(true);
      } else {
        setBG(false);
      }
    });
    return () => {
      window.removeEventListener("scroll",(scroll));
    };
  }, []);
  return (
    <div className={`w-full h-[4rem] flex ${Bg ? 'bg-teal-600' : 'bg-gradient-to-b from-teal-600'} fixed top-0 z-[99] px-[2rem] sm:px-[1rem] align-center justify-between`}>
        <Link className='my-auto' href='/'>Next Trek</Link>
        <div className='bg-none my-auto flex'>
        <button onClick={() => {setNavShow(!navShow)}} className='md:hidden w-8 h-8 z-[102]'>
          <div className={`h-1 w-full bg-slate-100 transform transition duration-300 ease-in-out ${navShow ? "rotate-45 translate-y-3.5" : "my-[5px]"}`} />
          <div className={`h-1 w-full bg-slate-100 transition-all duration-300 ease-in-out ${navShow ? "w-0" : "w-full my-[5px]"}`} />
          <div className={`h-1 w-full bg-slate-100 transform transition duration-300 ease-in-out ${navShow ? "-rotate-45 -translate-y-3.5" : "my-[5px]"}`} />
        </button>
        <ul className={`bg-teal-600 h-screen fixed right-0 top-0 pt-[4rem] md:p-0 w-[200px] text-center md:w-auto md:h-fit md:bg-transparent md:static md:my-auto md:flex ${navShow ? 'translate-x-0':'translate-x-[200px]' } transition ease-in-out duration-[1s] md:translate-x-0`}>
            <li className='md:mx-[25px] md:my-auto mx-[10px] my-[15px] text-slate-400 active:text-white focus:text-white hover:text-white transition-all duration-500 ease-in-out'><Link href='/destinations/' className='text-slate-500 active:text-white focus:text-white hover:text-white'>Destinations</Link></li>
            <li className='md:mx-[25px] md:my-auto mx-[10px] my-[15px] text-slate-400 active:text-white focus:text-white hover:text-white transition-all duration-500 ease-in-out'><Link href='/travel-blogs/' className='text-slate-500 active:text-white focus:text-white hover:text-white'>Travel Blogs</Link></li>
            <li className='md:mx-[25px] md:my-auto mx-[10px] my-[15px] text-slate-400 active:text-white focus:text-white hover:text-white transition-all duration-500 ease-in-out'><Link href='/your-blogs/' className='text-slate-500 active:text-white focus:text-white hover:text-white'>Your Blogs</Link></li>
            <li className='md:mx-[25px] md:my-auto mx-[10px] my-[15px]'><button className='p-[2px] rounded-sm bg-slate-200 outline-none min-w-[4rem]' type='button'>Login</button></li>
        </ul>
        </div>
    </div>
  )
}