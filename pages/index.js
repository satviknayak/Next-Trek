import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Banner from '../components/Banner' 

export default function Home() {
  return (
    <div className="flex flex-col">
      
      <Banner />
      
      <div className="flex min-h-[50vh] flex-col md:flex-row">
        <div className="w-full md:w-[50%] relative md:py-[3rem] md:pr-[1rem] md:pl-[5rem] hidden md:flex">
          <div className="w-[320px] h-[200px] m-auto flex relative">
            <Image layout="fill" alt="alternate_img" src="https://images2.imgbox.com/7a/54/y9wrGEnN_o.png" />
          </div>
        </div>
        <div className="w-full md:w-[50%] text-teal-700 relative flex flex-col md:py-3rem md:pr-[6rem] pt-[2rem] mb-[1rem]">
          <h1 className="font-comforter font-semibold text-[2.5rem] mb-[20px] px-[1rem]">Travel Destinations</h1>
          <p className="mb-[45px] px-[1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="p-[7px] w-fit mx-auto rounded-md border-[2px] border-teal-600 text-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white transition-all duration-[0.5s] ease-in-out">
            <Link href="/travel-destinations/">Search Destinations</Link>
          </button>
        </div>
        <div className="w-full md:w-[50%] relative md:py-[3rem] md:pr-[1rem] md:pl-[5rem] md:hidden flex">
          <div className="w-[320px] h-[200px] m-auto flex relative">
            <Image layout="fill" alt="alternate_img" src="https://images2.imgbox.com/7a/54/y9wrGEnN_o.png" />
          </div>
        </div>
      </div>

      <div className="flex min-h-[50vh] flex-col md:flex-row">
        <div className="w-full md:w-[50%] text-teal-700 relative flex flex-col md:py-3rem md:pl-[6rem] pt-[2rem] mb-[1rem]">
          <h1 className="font-comforter font-semibold text-[2.5rem] mb-[20px] px-[1rem]">Travel Blogs</h1>
          <p className="mb-[45px] px-[1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="p-[7px] w-fit mx-auto rounded-md border-[2px] border-teal-600 text-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-white transition-all duration-[0.5s] ease-in-out">
            <Link href="/travel-destinations/">Search Blogs</Link>
          </button>
        </div>
        <div className="w-full md:w-[50%] relative md:py-[3rem] md:pl-[1rem] md:pr-[5rem] flex">
          <div className="w-[350px] h-[180px] m-auto flex relative">
            <Image layout="fill" alt="alternate_img" src="https://images2.imgbox.com/4b/84/f5rjK0QK_o.png" />
          </div>
        </div>
      </div>

    </div>
  );
}
