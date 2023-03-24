import React from 'react'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import { AiOutlineClose } from "react-icons/ai";

import { auth,signUpUser,signInUser } from '../firebaseConfig'
import {onAuthStateChanged} from 'firebase/auth';

import ProfileCom from './ProfileCom';



export default function Navbar() {

  const router = useRouter()

  const [userCred,setUserCred] = useState(null);
  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserCred(user)
      }else{
        setUserCred(null)
      } 
    })
  })

  

  const [Bg, setBG] = useState(false);
  const [navShow,setNavShow] = useState(false);
  const [loginShow,setLoginShow] = useState(false);
  const [signupShow,setSignupShow] = useState(false);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  useEffect(() => {
    if (router.pathname === '/profile' || router.pathname === '/manage-destinations')
      setBG(true);
    else {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBG(true);
      } else {
        setBG(false);
      }
    });}
    return () => {
      window.removeEventListener("scroll",(scroll));
    };
  }, [userCred]);


  return (
    <div className={`w-full h-[4.2rem] flex ${Bg ? 'bg-violet-800 shadow-lg' : ''} fixed top-0 z-[99] px-[2rem] sm:px-[1rem] align-center justify-between`}>
        <Link className='my-auto' href='/'><div className='flex mt-[10px] cursor-pointer'><div className='w-[50px] h-[50px] relative'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={'/../public/images/logo-white.png'} alt='profile' /></div><span className='text-[1.1rem] my-auto flex text-white'>Next-Trek</span></div></Link>
        <div className='bg-none my-auto flex'>
        <button onClick={() => {setNavShow(!navShow)}} className='md:hidden w-8 h-8 z-[102]'>
          <div className={`h-1 w-full bg-slate-100 transform transition duration-300 ease-in-out ${navShow ? "rotate-45 translate-y-3.5" : "my-[5px]"}`} />
          <div className={`h-1 w-full bg-slate-100 transition-all duration-300 ease-in-out ${navShow ? "w-0" : "w-full my-[5px]"}`} />
          <div className={`h-1 w-full bg-slate-100 transform transition duration-300 ease-in-out ${navShow ? "-rotate-45 -translate-y-3.5" : "my-[5px]"}`} />
        </button>
        <ul className={`bg-violet-600 h-screen fixed right-0 top-0 pt-[4rem] md:p-0 w-[200px] text-center md:w-auto md:h-fit md:bg-transparent md:static md:my-auto md:flex ${navShow ? 'translate-x-0':'translate-x-[200px]' } transition ease-in-out duration-[1s] md:translate-x-0`}>
            <li className='md:mx-[25px] md:my-auto mx-[10px] my-[15px] cursor-pointer'><Link href='/destinations/'><span className='text-slate-200 hover:text-white font-bold hover:underline underline-offset-4 transition-all ease-in-out duration-[1s]'>Destinations</span></Link></li>
            <li className='md:mx-[25px] md:my-auto mx-[10px] my-[15px] cursor-pointer'><Link href='/travel-blogs/'><span className='text-slate-200 hover:text-white font-bold hover:underline underline-offset-4 transition-all ease-in-out duration-[1s]'>Travel Blogs</span></Link></li>
            {userCred !== null ? 
              <ProfileCom user={userCred}/>
            :
              <button className='md:mx-[25px] md:my-auto mx-[10px] my-[15px] bg-[#00000090] rounded-md text-white px-[15px] py-[5px] cursor-pointer' onClick={()=>{setLoginShow(!loginShow)}}>Login</button> 
            }
</ul>
        </div>

      <div className={` w-full h-screen fixed top-0 left-0 z-[500] bg-[#00000090] ${loginShow ? 'flex': 'hidden'}`}>
        <div className='w-[300px] h-[400px] bg-white flex m-auto rounded-lg p-[15px] flex-col relative'>
          <h1 className='text-center font-bold text-slate-900 text-[2rem] w-full my-[20px]'>Login</h1>
          <div className='flex flex-col'>
            <label className='flex-col flex my-[10px]'> <span>Email :</span>
              <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'email'} value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </label>
            <label className='flex-col flex my-[10px]'> <span>Password :</span>
              <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </label>
            <button className='w-[80%] py-[5px] my-[10px] mx-auto bg-blue-800 text-center text-white rounded-sm' onClick={async()=>{
              await signInUser({email:email,password:password})
              setLoginShow(!loginShow)
            }}>Submit</button>
          </div>
          <AiOutlineClose className='text-[1.5rem] absolute top-[10px] right-[10px] cursor-pointer' onClick={()=>{setLoginShow(false);setEmail("");setPassword("")}} />
          <span className='text-[0.85rem] w-full text-center mt-[10px]'>New User? <i className='text-sky-700 cursor-pointer' onClick={()=>{setLoginShow(false);setSignupShow(true);setEmail("");setPassword("")}}>SignUp here!</i></span>
          <span className='text-[0.85rem] w-full text-center text-sky-700 cursor-pointer'>Forgot Password?</span>
        </div>
      </div>

      <div className={` w-full h-screen fixed top-0 left-0 z-[500] bg-[#00000090] ${signupShow ? 'flex': 'hidden'}`}>
        <div className='w-[300px] h-[500px] bg-white flex m-auto rounded-lg p-[15px] flex-col relative overflow-y-auto scroll-hide'>
          <h1 className='text-center font-bold text-slate-900 text-[2rem] w-full my-[20px]'>SignUp</h1>
          <div className='flex flex-col'>
            <label className='flex-col flex my-[10px]'> <span>Name :</span>
              <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={name} onChange={(e)=>{setName(e.target.value)}} />
            </label>
            <label className='flex-col flex my-[10px]'> <span>Email :</span>
              <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'email'} value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </label>
            <label className='flex-col flex my-[10px]'> <span>Password :</span>
              <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </label>
            <label className='flex-col flex my-[10px]'> <span>Confirm Password :</span>
              <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'password'} value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
            </label>
            <div className='text-red-300 flex flex-col my-[10px] text-[0.8rem]'>
              {password.length >= 8 ? <></> : <span>*Password length is short. Minimum 8 characters!!</span>}
              { password===confirmPassword ? <></> : <span>*Password and Confirm Password donot match</span>}
            </div>
            <button className='w-[80%] py-[5px] my-[10px] mx-auto bg-blue-800 text-center text-white rounded-sm' onClick={async()=>{
              if(password!=='' && confirmPassword!=='' && password.length >= 8 && password===confirmPassword){
                await signUpUser({email:email,password:password,name:name})
                setSignupShow(!signupShow)
              }
            }}>Submit</button>
          </div>
          <AiOutlineClose className='text-[1.5rem] absolute top-[10px] right-[10px] cursor-pointer' onClick={()=>{setSignupShow(false);setEmail("");setConfirmPassword("");setPassword("")}} />
          <span className='text-[0.85rem] w-full text-center mt-[10px]'>Already a User? <i className='text-sky-700 cursor-pointer' onClick={()=>{setLoginShow(true);setSignupShow(false);setEmail("");setConfirmPassword("");setPassword("");setName("")}}>Login here!</i></span>
        </div>
      </div>

    </div>
  )
}