import React from 'react'
import Image from 'next/image'
export default function index() {
  return (
    <div>
   <div className="bg-banner-s flex md:h-[400px] h-[300px] w-full relative">
        <div className="w-full h-full flex bg-black opacity-40 absolute top-0 left-0"></div>
        <form className="m-auto flex z-[3]">
          <input
            type={"search"}
            placeholder="Search Blogs ..."
            className="md:w-[260px] w-[150px] h-[35px] rounded-md border-none outline-none py-[5px] px-[10px]"
          />
          <input
            type={"submit"}
           className="bg-sky-600 rounded-md p-[5px] ml-[10px] text-white md:w-[125px] w-[75px]"
          />
        </form>
      </div>

      <div className="flex flex-col min-h-screen w-full md:w-[80%] m-auto px-[20px] sm:px-[30px]">
        
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

      </div>
    </div>
  );
}
