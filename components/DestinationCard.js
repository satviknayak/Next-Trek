import { useState,useEffect } from "react"
import Image from "next/image"
import {MdClose} from 'react-icons/md'

export default function DestinationCard({show,setShow,details}) {

    const [Arr,setArr] = useState([])
    useEffect(()=>{
        setArr(details.tourArr)
    })
    

  return (
    <div className={`${show?'flex':'hidden'} bg-[#00000090] fixed top-0 w-full h-screen z-[500] px-[10px]`}>
        <div className="bg-white flex flex-col w-[600px] h-[400px] mx-auto mt-[50px] rounded-md relative">
            <MdClose className="text-2xl absolute top-[20px] right-[20px]" onClick={()=>{setShow(!show)}} />
            <div className="flex p-[10px] ">
                <div className="flex relative w-[150px] h-[100px]"><Image src={details.photoUrl} alt={details.name} layout='fill' objectFit="cover" objectPosition={'center'} /></div>
                <h1 className="m-auto text-center">{details.name}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: details.description }} className='text-[0.8rem] m-auto max-w-[400px] px-[10px]' ></div>
            <div className="flex w-full h-fit overflow-x-auto scroll-hide">
            {Arr?.map((a,index)=>(
                <div className="m-[10px] flex flex-col" key={index}>
                    <div className="relative w-[150px] h-[100px]"><Image src={a.url} alt={a.name} layout='fill' objectFit="cover" objectPosition={'center'} /></div>
                    <h2>{a.name}</h2>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
