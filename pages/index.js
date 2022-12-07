import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' 

import { BsChevronDoubleDown } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex flex-col">
      
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
        <span className='absolute top-[50px] right-[30px]'><Link href={'/destinations'}>See More</Link></span>
        <div className='w-full flex overflow-x-auto mt-[40px] pb-[20px]'>

          <div className='flex flex-col min-w-[250px] h-[275px] rounded-lg overflow-hidden shadow-lg m-[15px] hover:scale-[1.1] transition-all duration-[1s] ease-in-out'>
            <div className='relative w-full flex h-[200px]'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"}/></div>
            <h1 className='ml-[20px] mt-[10px] font-bold'>Delhi</h1>
            <h2 className='ml-[20px] text-[0.9rem]'>India</h2>
          </div>

          <div className='flex flex-col min-w-[250px] h-[275px] rounded-lg overflow-hidden shadow-lg m-[15px] hover:scale-[1.1] transition-all duration-[1s] ease-in-out'>
            <div className='relative w-full flex h-[200px]'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg"}/></div>
            <h1 className='ml-[20px] mt-[10px] font-bold'>London</h1>
            <h2 className='ml-[20px] text-[0.9rem]'>UK</h2>
          </div>

          <div className='flex flex-col min-w-[250px] h-[275px] rounded-lg overflow-hidden shadow-lg m-[15px] hover:scale-[1.1] transition-all duration-[1s] ease-in-out'>
            <div className='relative w-full flex h-[200px]'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://cdn.britannica.com/20/20120-050-89764C76/Tiananmen-entryway-Imperial-City-China-Beijing.jpg"}/></div>
            <h1 className='ml-[20px] mt-[10px] font-bold'>Beijing</h1>
            <h2 className='ml-[20px] text-[0.9rem]'>China</h2>
          </div>

          <div className='flex flex-col min-w-[250px] h-[275px] rounded-lg overflow-hidden shadow-lg m-[15px] hover:scale-[1.1] transition-all duration-[1s] ease-in-out'>
            <div className='relative w-full flex h-[200px]'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://cdn.britannica.com/61/160261-050-A6A3F71D/street-Seoul-South-Korea.jpg"}/></div>
            <h1 className='ml-[20px] mt-[10px] font-bold'>Seoul</h1>
            <h2 className='ml-[20px] text-[0.9rem]'>South Korea</h2>
          </div>

          <div className='flex flex-col min-w-[250px] h-[275px] rounded-lg overflow-hidden shadow-lg m-[15px] hover:scale-[1.1] transition-all duration-[1s] ease-in-out'>
            <div className='relative w-full flex h-[200px]'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://cdn.britannica.com/09/61509-050-EB149D2D/Muscat-Oman.jpg"}/></div>
            <h1 className='ml-[20px] mt-[10px] font-bold'>Muscat</h1>
            <h2 className='ml-[20px] text-[0.9rem]'>Oman</h2>
          </div>

        </div>
      </div>
      
      
      <div className='flex flex-col md:w-[80%] w-full px-[20px] text-slate-900 min-h-[300px] m-auto pt-[30px] relative'>
        <h1 className='md:text-center text-left ml-[20px] md:ml-0 text-[2.5rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Travel Blogs</h1>
        <span className='absolute top-[50px] right-[30px]'><Link href={'/travel-blogs'}>See More</Link></span>
        <div className='w-full flex overflow-x-auto mt-[40px] pb-[20px]'>

          <div className='shadow-xl flex flex-col min-w-[250px] m-[10px] h-[250px]'>
            <div className='flex'>
              <div className='overflow-hidden rounded-full w-[50px] h-[50px] flex relative'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://www.w3schools.com/w3css/img_avatar3.png"} /></div>
              <div className='flex-col flex ml-[20px]'>
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>12/10/2022</h3>
              </div>
            </div>
            <div className='px-[10px] mt-[15px]'>
              <h2>Dubai</h2>
              <p className='text-[0.8rem] relative h-[135px] overflow-hidden'>
                No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
                <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
              </p>
            </div>
          </div>

          <div className='shadow-xl flex flex-col min-w-[250px] m-[10px] h-[250px]'>
            <div className='flex'>
              <div className='overflow-hidden rounded-full w-[50px] h-[50px] flex relative'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://www.w3schools.com/w3css/img_avatar3.png"} /></div>
              <div className='flex-col flex ml-[20px]'>
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>12/10/2022</h3>
              </div>
            </div>
            <div className='px-[10px] mt-[15px]'>
              <h2>Dubai</h2>
              <p className='text-[0.8rem] relative h-[135px] overflow-hidden'>
                No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
                <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
              </p>
            </div>
          </div>

          <div className='shadow-xl flex flex-col min-w-[250px] m-[10px] h-[250px]'>
            <div className='flex'>
              <div className='overflow-hidden rounded-full w-[50px] h-[50px] flex relative'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://www.w3schools.com/w3css/img_avatar3.png"} /></div>
              <div className='flex-col flex ml-[20px]'>
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>12/10/2022</h3>
              </div>
            </div>
            <div className='px-[10px] mt-[15px]'>
              <h2>Dubai</h2>
              <p className='text-[0.8rem] relative h-[135px] overflow-hidden'>
                No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
                <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
              </p>
            </div>
          </div>

          <div className='shadow-xl flex flex-col min-w-[250px] m-[10px] h-[250px]'>
            <div className='flex'>
              <div className='overflow-hidden rounded-full w-[50px] h-[50px] flex relative'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://www.w3schools.com/w3css/img_avatar3.png"} /></div>
              <div className='flex-col flex ml-[20px]'>
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>12/10/2022</h3>
              </div>
            </div>
            <div className='px-[10px] mt-[15px]'>
              <h2>Dubai</h2>
              <p className='text-[0.8rem] relative h-[135px] overflow-hidden'>
                No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
                <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
              </p>
            </div>
          </div>

          <div className='shadow-xl flex flex-col min-w-[250px] m-[10px] h-[250px]'>
            <div className='flex'>
              <div className='overflow-hidden rounded-full w-[50px] h-[50px] flex relative'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={"https://www.w3schools.com/w3css/img_avatar3.png"} /></div>
              <div className='flex-col flex ml-[20px]'>
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>12/10/2022</h3>
              </div>
            </div>
            <div className='px-[10px] mt-[15px]'>
              <h2>Dubai</h2>
              <p className='text-[0.8rem] relative h-[135px] overflow-hidden'>
                No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
                <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
