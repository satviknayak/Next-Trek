import React from 'react'
import 'react-quill/dist/quill.snow.css';
import { AiOutlineClose } from "react-icons/ai";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function AddBlog({show,setShow}) {


  

  return (
    <div className={`bg-[#00000090] ${show ? 'flex' :'hidden'}  w-full h-screen fixed top-0 left-0 z-[500]`}>
        <div className='bg-white flex flex-col sm:w-[500px] w-[300px] h-[600px] m-auto rounded-lg relative'>
        <AiOutlineClose className='text-[2rem] absolute top-[10px] right-[10px] cursor-pointer' onClick={()=>{setShow(false)}} />
            <h1 className='w-full text-center font-bold text-[2rem] text-violet-700 mt-[30px]'>Add Blog</h1>
            <form className='flex flex-col'>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Username :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' disabled type={'text'}/>
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Date:</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' disabled type={'date'}/>
                </label></div>
                <ReactQuill theme='snow' className='w-[90%] h-[200px] mx-auto my-[10px]'/>
                <button className='w-[50%] mx-auto p-[5px] bg-sky-700 rounded-md text-white my-[5px] mt-[50px]'>Add Blog</button>
                <button className='w-[50%] mx-auto p-[5px] bg-red-700 rounded-md text-white my-[5px]'>Reset</button>
            </form>
        </div>
    </div>
  )
}
