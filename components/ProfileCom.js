import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

import {auth} from '../firebaseConfig'
import { signOut } from "firebase/auth"

export default function ProfileCom({user}) {
    const [ShowPopup,setShowPopup] = useState(false)
    console.log(user)
  return (
    <div className="mx-[50px] relative">
        <span className="relative flex rounded-full w-[30px] h-[30px] my-auto overflow-auto" onClick={()=>{setShowPopup(!ShowPopup)}}>
          <Image src={user.photoURL===null?'/../public/images/profileimg.jpg':user.photoURL} layout='fill' objectFit='cover' objectPosition='center' />
        </span>
        <div className={`absolute top-[40px] right-[-70%] flex-col bg-[#00000090] p-[10px] rounded text-slate-300 ${ShowPopup?'flex':'hidden'}`}>
            <Link className='hover:text-slate-100' href={'/profile/'}>Profile</Link>
            <span className='cursor-pointer hover:text-slate-100' onClick={()=>{signOut(auth);setShowPopup(!ShowPopup)}}>LogOut</span>
        </div>
    </div>
  )
}
