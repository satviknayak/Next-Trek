import 'react-quill/dist/quill.snow.css';
import { AiOutlineClose } from "react-icons/ai";

import dynamic from "next/dynamic";
import { useState,useContext } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '../context/AuthContext';
import { collection,addDoc } from 'firebase/firestore'
import { database } from '../firebaseConfig'

const ReactQuill = dynamic(import('react-quill'), { ssr: false })
const dbInstance = collection(database,'Blogs');

export default function AddBlog({show,setShow}) {

    const usrctx = useContext(AuthContext)
    const router =  useRouter()

    const [title,setTitle] = useState('')
    const [username,setUsername] = useState(usrctx.currentUser?.displayName)
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [Uuid,setUuid] = useState(usrctx.currentUser?.uid)

    {/*function to add new Destination*/}
    const saveNewBlog = (data) => {
      addDoc(dbInstance,data).then(()=>{router.reload(window.location.pathname)})
    }
    const addDesc = (value) => {setDescription(value)}

  return (
    <div className={`bg-[#00000090] ${show ? 'flex' :'hidden'}  w-full h-screen fixed top-0 left-0 z-[500]`}>
        <div className='bg-white flex flex-col sm:w-[500px] w-[300px] h-[600px] m-auto rounded-lg relative overflow-y-auto scroll-hide'>
        <AiOutlineClose className='text-[2rem] absolute top-[10px] right-[10px] cursor-pointer' onClick={()=>{setShow(false)}} />
            <h1 className='w-full text-center font-bold text-[2rem] text-violet-700 mt-[30px]'>Add Blog</h1>
            <div className='flex flex-col'>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Username :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Date:</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'date'} value={date} onChange={(e)=>{setDate(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Title:</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </label></div>
                <ReactQuill theme='snow' className='w-[90%] h-[200px] mx-auto my-[10px]'  onChange={addDesc}/>
                <button className='w-[50%] mx-auto p-[5px] bg-sky-700 rounded-md text-white my-[5px] mt-[75px]' onClick={()=>{
                  saveNewBlog({username:username,uid:Uuid,title:title,description:description,date:date})
                  setShow(!show)
                }}>Add Blog</button>
                <button className='w-[50%] mx-auto p-[5px] bg-red-700 rounded-md text-white my-[5px]' onClick={()=>{
                  setTitle('');setDescription('');setDate('')
                }}>Reset</button>
            </div>
        </div>
    </div>
  )
}
