import React from 'react'
import Image from 'next/image'
export default function index() {
  return (
   <div className='flex flex-col sm:flex-row w-full h-fit mt-[4rem] pb-20'>
      <div id="card">
        <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl pb-20 pt-10">Famous Destinations</h2>
        <div class=" container w-50 lg:w-3/5 mx-auto flex flex-wrap">
        <div class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 mx-20 items-center">
          <div class="h-auto w-auto">
            <Image  width={450} height={300} className="object-center" alt="destination_img" src={'/../public/dest-illustration.png'} />
          </div>
          <div class="w-auto h-auto py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg leading-tight truncate">Destination Name</h3>
          <p class="mt-2 pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis, error deserunt fugiat veritatis magni aperiam assumenda recusanda 
          </p>
          <button class=' bg-white hover:bg-black hover:text-white border border-solid border-grey w-1/3 py-2'>Read More</button>
          </div>
        </div>
        </div>
      </div>
   </div>
  );
}
