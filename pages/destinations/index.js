import React from 'react'
import Image from 'next/image'

export default function index() {
  return (
    <div>
      <div className="bg-banner-f flex md:h-[400px] h-[300px] w-full relative">
        <div className="w-full h-full flex bg-black opacity-40 absolute top-0 left-0"></div>
        <form className="m-auto flex z-[3]">
          <input type={"search"} placeholder="Search Destinations ..." className="md:w-[260px] w-[150px] h-[35px] rounded-md border-none outline-none py-[5px] px-[10px]"/>
          <input type={"submit"} className="bg-sky-600 rounded-md p-[5px] ml-[10px] text-white md:w-[125px] w-[75px]"/>
        </form>
      </div>

      <div className="flex flex-col min-h-screen w-full md:w-[80%] m-auto px-[20px] sm:px-[30px]">
        
        <div className="rounded-xl flex flex-col md:flex-row shadow-lg text-slate-900 w-full md:h-[300px] h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="md:w-[35%] w-full md:h-[70%] h-[150px] flex bg-white md:m-auto relative">
            <Image layout="fill" objectFit="cover" src={"https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"}/>
          </div>
          <div className="md:w-[65%] w-full h-[200px] p-[15px] md:mx-[20px] mx-0">
            <h2 className='text-[1.75rem]'>Delhi</h2>
            <p className="relative flex w-full h-[130px] md:h-[175px] overflow-hidden text-[0.9rem]">
              Delhi, Indias capital territory, is a massive metropolitan area
              in the countrys north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
              and the sprawling Jama Masjid mosque, whose courtyard accommodates
              25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled
              with food carts, sweets shops and spice stalls.
              <span className="absolute right-0 bottom-0 px-[15px] bg-white">read more</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl flex flex-col md:flex-row shadow-lg text-slate-900 w-full md:h-[300px] h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="md:w-[35%] w-full md:h-[70%] h-[150px] flex bg-white md:m-auto relative">
            <Image layout="fill" objectFit="cover" src={"https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"}/>
          </div>
          <div className="md:w-[65%] w-full h-[200px] p-[15px] md:mx-[20px] mx-0">
            <h2 className='text-[1.75rem]'>Delhi</h2>
            <p className="relative flex w-full h-[130px] md:h-[175px] overflow-hidden text-[0.9rem]">
              Delhi, Indias capital territory, is a massive metropolitan area
              in the countrys north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
              and the sprawling Jama Masjid mosque, whose courtyard accommodates
              25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled
              with food carts, sweets shops and spice stalls.
              <span className="absolute right-0 bottom-0 px-[15px] bg-white">read more</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl flex flex-col md:flex-row shadow-lg text-slate-900 w-full md:h-[300px] h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="md:w-[35%] w-full md:h-[70%] h-[150px] flex bg-white md:m-auto relative">
            <Image layout="fill" objectFit="cover" src={"https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"}/>
          </div>
          <div className="md:w-[65%] w-full h-[200px] p-[15px] md:mx-[20px] mx-0">
            <h2 className='text-[1.75rem]'>Delhi</h2>
            <p className="relative flex w-full h-[130px] md:h-[175px] overflow-hidden text-[0.9rem]">
              Delhi, Indias capital territory, is a massive metropolitan area
              in the countrys north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
              and the sprawling Jama Masjid mosque, whose courtyard accommodates
              25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled
              with food carts, sweets shops and spice stalls.
              <span className="absolute right-0 bottom-0 px-[15px] bg-white">read more</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl flex flex-col md:flex-row shadow-lg text-slate-900 w-full md:h-[300px] h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="md:w-[35%] w-full md:h-[70%] h-[150px] flex bg-white md:m-auto relative">
            <Image layout="fill" objectFit="cover" src={"https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"}/>
          </div>
          <div className="md:w-[65%] w-full h-[200px] p-[15px] md:mx-[20px] mx-0">
            <h2 className='text-[1.75rem]'>Delhi</h2>
            <p className="relative flex w-full h-[130px] md:h-[175px] overflow-hidden text-[0.9rem]">
              Delhi, Indias capital territory, is a massive metropolitan area
              in the countrys north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
              and the sprawling Jama Masjid mosque, whose courtyard accommodates
              25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled
              with food carts, sweets shops and spice stalls.
              <span className="absolute right-0 bottom-0 px-[15px] bg-white">read more</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl flex flex-col md:flex-row shadow-lg text-slate-900 w-full md:h-[300px] h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="md:w-[35%] w-full md:h-[70%] h-[150px] flex bg-white md:m-auto relative">
            <Image layout="fill" objectFit="cover" src={"https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"}/>
          </div>
          <div className="md:w-[65%] w-full h-[200px] p-[15px] md:mx-[20px] mx-0">
            <h2 className='text-[1.75rem]'>Delhi</h2>
            <p className="relative flex w-full h-[130px] md:h-[175px] overflow-hidden text-[0.9rem]">
              Delhi, Indias capital territory, is a massive metropolitan area
              in the countrys north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
              and the sprawling Jama Masjid mosque, whose courtyard accommodates
              25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled
              with food carts, sweets shops and spice stalls.
              <span className="absolute right-0 bottom-0 px-[15px] bg-white">read more</span>
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
}
