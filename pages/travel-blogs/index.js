import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

import AddBlog from '../../components/AddBlog';

export default function index() {
  const [showAddBlog,setShowAddBlog] = useState(false);
  return (
    <div>
      <AddBlog show={showAddBlog} setShow={setShowAddBlog} />
   <div className="bg-banner-s flex md:h-[400px] h-[300px] w-full relative">
        <div className="w-full h-full flex bg-black opacity-40 absolute top-0 left-0"></div>
        <form className="m-auto flex z-[3]">
          <input
            type={"search"}
            placeholder="Search Blogs ..."
            className="md:w-[260px] w-[150px] h-[35px] rounded-md border-none outline-none py-[5px] px-[10px]"
          />
          <button
            type={"submit"}
           className="bg-sky-700 rounded-md p-[5px] ml-[10px] text-white md:w-[125px] w-[75px]"
          >Search</button>
        </form>
      </div>

      <div className="flex flex-col min-h-screen w-full md:w-[80%] m-auto px-[20px] sm:px-[30px]">

        <button className='p-[5px] bg-sky-700' onClick={()=>{setShowAddBlog(true)}}>ADD BLOG</button>
        
        <div className="rounded-xl flex flex-col shadow-lg text-slate-900 w-full h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="flex px-[10px] justify-between w-full h-fit">
            <div className="flex">
              <div className="w-[50px] h-[50px] relative flex overflow-hidden rounded-full">
                <Image layout="fill" objectFit="cover" objectPosition={"center"} src={"https://www.w3schools.com/w3css/img_avatar3.png"}/>
              </div>
              <div className="flex flex-col ml-[10px]">
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>nayaksatvik02@gmail.com</h3>
              </div>
            </div>
            <span class='text-[0.8rem] hidden sm:block'>12/10/2022</span>
          </div>
          <p className='relative h-[150px] overflow-hidden mt-[20px] text-[0.9rem] px-[5px] sm:px-0'>
            No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
            <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
          </p>
        </div>

        <div className="rounded-xl flex flex-col shadow-lg text-slate-900 w-full h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="flex px-[10px] justify-between w-full h-fit">
            <div className="flex">
              <div className="w-[50px] h-[50px] relative flex overflow-hidden rounded-full">
                <Image layout="fill" objectFit="cover" objectPosition={"center"} src={"https://www.w3schools.com/w3css/img_avatar3.png"}/>
              </div>
              <div className="flex flex-col ml-[10px]">
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>nayaksatvik02@gmail.com</h3>
              </div>
            </div>
            <span class='text-[0.8rem] hidden sm:block'>12/10/2022</span>
          </div>
          <p className='relative h-[150px] overflow-hidden mt-[20px] text-[0.9rem] px-[5px] sm:px-0'>
            No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
            <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
          </p>
        </div>

        <div className="rounded-xl flex flex-col shadow-lg text-slate-900 w-full h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="flex px-[10px] justify-between w-full h-fit">
            <div className="flex">
              <div className="w-[50px] h-[50px] relative flex overflow-hidden rounded-full">
                <Image layout="fill" objectFit="cover" objectPosition={"center"} src={"https://www.w3schools.com/w3css/img_avatar3.png"}/>
              </div>
              <div className="flex flex-col ml-[10px]">
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>nayaksatvik02@gmail.com</h3>
              </div>
            </div>
            <span class='text-[0.8rem] hidden sm:block'>12/10/2022</span>
          </div>
          <p className='relative h-[150px] overflow-hidden mt-[20px] text-[0.9rem] px-[5px] sm:px-0'>
            No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
            <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
          </p>
        </div>

        <div className="rounded-xl flex flex-col shadow-lg text-slate-900 w-full h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="flex px-[10px] justify-between w-full h-fit">
            <div className="flex">
              <div className="w-[50px] h-[50px] relative flex overflow-hidden rounded-full">
                <Image layout="fill" objectFit="cover" objectPosition={"center"} src={"https://www.w3schools.com/w3css/img_avatar3.png"}/>
              </div>
              <div className="flex flex-col ml-[10px]">
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>nayaksatvik02@gmail.com</h3>
              </div>
            </div>
            <span class='text-[0.8rem] hidden sm:block'>12/10/2022</span>
          </div>
          <p className='relative h-[150px] overflow-hidden mt-[20px] text-[0.9rem] px-[5px] sm:px-0'>
            No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
            <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
          </p>
        </div>

        <div className="rounded-xl flex flex-col shadow-lg text-slate-900 w-full h-fit p-0 md:p-[25px] overflow-hidden my-[30px]">
          <div className="flex px-[10px] justify-between w-full h-fit">
            <div className="flex">
              <div className="w-[50px] h-[50px] relative flex overflow-hidden rounded-full">
                <Image layout="fill" objectFit="cover" objectPosition={"center"} src={"https://www.w3schools.com/w3css/img_avatar3.png"}/>
              </div>
              <div className="flex flex-col ml-[10px]">
                <h2 className='font-bold'>Satvik S Nayak</h2>
                <h3 className='text-[0.9rem]'>nayaksatvik02@gmail.com</h3>
              </div>
            </div>
            <span class='text-[0.8rem] hidden sm:block'>12/10/2022</span>
          </div>
          <p className='relative h-[150px] overflow-hidden mt-[20px] text-[0.9rem] px-[5px] sm:px-0'>
            No, this blog won't be about a Korean boy-band called K.S.A. I don't in fact know, if there is a Korean boy-band named like that. It wouldn't surprise me. The K.S.A. I am referring to is the abbreviation for the Kingdom of Saudi Arabia. A long time dream. One that seemed unattainable until three years ago, when suddenly this closed to tourist country went from unable to get a visa, to press a button on the internet and get an e-visa in ten seconds! Covid put a spanners in my plan to go there earlier, but here I am at last. Along with me on the first part of my trip is my mum. I would have liked to have Jenni with me, but she couldn't come.
            <span className='pl-[10px] bg-white absolute bottom-0 right-0'> ...Read More</span>
          </p>
        </div>

        <div className='my-[25px] w-full flex'>
      <nav class="isolate inline-flex -space-x-px mx-auto rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span class="sr-only">Previous</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" aria-current="page" class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">1</a>
        <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</a>
        <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
        <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
        <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">8</a>
        <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</a>
        <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</a>
        <a href="#" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span class="sr-only">Next</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
        </div>

      </div>
    </div>
  );
}
