import {MdOutlineCreate} from 'react-icons/md';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { app, database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const dbInstance = collection(database,'destinations');

const saveNewDest = () => {

}

export default function managedestinations() {

  const [newDest,setNewDest] = useState(true);

  return (
    <div className="flex min-h-screen w-full pt-[5rem] relative">
        <div className="flex w-full h-fit relative">
            <button className="absolute left-[1.5rem] sm:left-[2.5rem] text-[0.85rem] flex bg-violet-800 text-white p-[8px] rounded-md" onClick={()=>{setNewDest(!newDest)}}><MdOutlineCreate className='mx-[5px] my-auto'/>Add Destinations</button>
        </div>
        <div className={`fixed top-0 z-[400] w-full h-screen bg-[#00000090] ${newDest ? 'flex': 'hidden'}`}>
          <div className='flex w-[300px] sm:w-[450px] m-auto h-fit bg-white rounded-xl relative mt-[200px] mb-[50px] p-[20px]'>
            <AiOutlineClose className='absolute top-[16px] right-[16px] text-[1.3rem]' onClick={()=>{setNewDest(!newDest)}}/>
            <div>

            </div>
          </div>
        </div>
    </div>
  )
}
