import React from 'react'
import Image from 'next/image'
export default function index() {
  return (
   <div className='flex flex-col sm:flex-row w-full h-fit mt-[4rem] pb-20'>
    <div>
    <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl pb-20 pt-10">Travel Blogs</h2>
    <div class="container w-40 lg:w-3/5 p-3 mx-auto flex flex-wrap"> 
      <div class="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto  border shadow">
        <Image  width={450} height={250} className="object-center block h-auto w-full lg:w-48 flex-none bg-cover" alt="travel_blog_img" src={'/../public/blog.png'} />
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight">My Travel Experience</div>
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
