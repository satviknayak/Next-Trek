import Head from 'next/head'
import Image from 'next/image'
import { BsChevronDoubleDown } from "react-icons/bs";
import { getDocs,collection } from 'firebase/firestore'
import { database } from '../firebaseConfig'
import Navbar from '../components/Navbar';
import { useState,useContext,useEffect } from 'react';
import { AuthContext } from '../context/AuthContext'
import {MdCreate,MdDelete} from 'react-icons/md'

const dbInstance1 = collection(database,'Destinations');
const dbInstance2 = collection(database,'Blogs');

export default function Home() {

  
  const userctx = useContext(AuthContext)

  const [DestList,setDestList] = useState([])
  {/* Function to get or read all the destinations */}
  const getDestinations = () => {
    getDocs(dbInstance1)
        .then((data) => {
            setDestList(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
        })
  }
  useEffect(() => {
    getDestinations()
    getBlogs()
  },[])

  const [BlogList,setBlogList] = useState([])
  {/* Function to get or read all the Blogs */}
  const getBlogs = () => {
    getDocs(dbInstance2)
        .then((data) => {
            setBlogList(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
        })
  }

  return (
    <div className="flex flex-col">
      <Head>
        <title>Next Trek</title>
      </Head>
      <Navbar/>
      <div className='bg-banner-light  w-full h-screen flex relative'>
        <div className='flex flex-col w-full md:w-[50%] h-fit md:my-auto my-0 mt-[100px] md:ml-[50px] ml-0 px-[15px] md:px-0'>
          <h3 className=''>NEXT-TREK</h3>
          <h1 className='text-[2.5rem] w-[300px] font-extrabold my-[10px]'>NEVER STOP EXPLORING THE WORLD</h1>
          <p className='w-[300px] mb-[50px] mt-[10px]'>It is in our nature to explore, to reach out into the unknown. The only true failure would be not to explore at all.</p>
        </div>
        <div className='w-full absolute bottom-[3rem] text-white text-[3rem]'><BsChevronDoubleDown className='m-auto'/></div>   
      </div>
      
      <div className='flex flex-col md:w-[80%] w-full px-[20px] text-slate-900 h-fit m-auto pt-[30px] relative'>
        <h1 className='md:text-center text-left ml-[20px] md:ml-0 text-[2.5rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Travel Destinations</h1>
        <div className='w-full h-fit flex overflow-x-auto overflow-y-hidden scroll-hide mt-[0px]'>
        {DestList.map((a,index)=>(
          <div key={index} className='flex flex-col p-[10px] rounded-xl w-fit h-fit m-auto hover:scale-[1.1] transition-all duration-[1s] ease-in-out' >
          <div className='w-[200px] rounded-xl flex h-[200px] relative overflow-hidden'>
            <Image src={a.photoUrl} objectFit='cover' objectPosition={'center'} layout='fill' />
          </div>
          <h1 className='w-full text-center'>{a.name}</h1>
        </div>
        ))}
        </div>
      </div>
      
      
      <div className='flex flex-col md:w-[80%] w-full px-[20px] text-slate-900 h-fit m-auto pt-[30px] relative'>
        <h1 className='md:text-center text-left ml-[20px] md:ml-0 text-[2.5rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Travel Blogs</h1>
        <div className='w-full flex h-fit overflow-x-auto overflow-y-hidden mb-[50px]'>
        {BlogList.map((a,index)=>(
          <div key={index} className='flex flex-col w-[250px] sm:w-[500px] h-fit p-[5px] sm:px-[15px] mx-[10px] my-[25px] rounded-xl shadow-xl border-[1px] border-slate-500'>
          <div className='flex w-full h-fit justify-between'>
            <div>
              <h1 className='text-[0.95rem] font-bold'>{a.title}</h1>
              <h2 className='text-[0.85rem]'>{a.username}</h2>
              <h3 className='text-[0.8rem]'>{a.date}</h3>
            </div>
          </div>
          <div className='flex max-w-[500px] mx-auto text-[0.8rem] max-h-[100px] overflow-hidden' dangerouslySetInnerHTML={{ __html: a.description }}></div>
        </div>
        ))}
        </div>
      </div>

    </div>
  );
}
