import React from 'react'
import Image from 'next/image'

export default function profile() {
  return (
    <div className='flex w-full h-fit pt-[4rem]'>
        <div className='m-auto my-[100px] flex flex-col md:flex-row md:w-[80%] w-[95%] h-fit rounded-lg shadow-xl relative overflow-hidden'>
            <div className='md:w-[40%] w-full flex h-full'>
              <div className='md:mt-[100px] mt-[30px] w-fit h-fit flex flex-col mx-auto'>
                <div className='relative w-[150px] h-[150px] flex rounded-full overflow-hidden'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={'/../public/images/profileimg.jpg'} /></div>
                <h4 className=' mt-[20px] text-slate-900 w-[150px] text-[0.85rem] text-center'>Update Profile Image? <span className='text-violet-900'>Click Here</span></h4>
              </div>
            </div>
            <div className='md:w-[60%] w-full flex flex-col md:h-full h-fit'>
              <h1 className='w-full text-center text-[2rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Profile</h1>
              <form className='w-full flex flex-col mb-[20px]'>
                
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Email :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'email'}/>
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Name :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'}/>
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Date of Birth :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'date'}/>
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Phone Number :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'tel'}/>
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Instagram ID :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'url'}/>
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Twitter ID :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'url'}/>
                </label></div>

                <button className='w-[50%] mx-auto p-[5px] bg-sky-700 rounded-md text-white my-[5px]'>Update</button>
                <button className='w-[50%] mx-auto p-[5px] bg-red-700 rounded-md text-white my-[5px]'>Reset</button>
              </form>
            </div>
        </div>
    </div>
  )
}