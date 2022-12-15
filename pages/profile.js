import Image from 'next/image'
import { useState,useEffect,useContext } from 'react'
import Navbar from '../components/Navbar'
import {database,getUserProfile} from '../firebaseConfig'
import {updateDoc,doc,where} from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import {AuthContext} from '../context/AuthContext'
import { useRouter } from 'next/router'
import { MdAddCircleOutline } from 'react-icons/md'

export default function profile() {

  const usrctx = useContext(AuthContext)
  const router = useRouter()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [dob,setDob] = useState('')
  const [phone,setPhone] = useState('')
  const [insta,setInsta] = useState('')
  const [twitter,setTwitter] = useState('')
  const [photoUrl,setPhotoUrl] = useState('')
  const [id,setId] = useState()

  const getDetails = async() => {
    const userProf = await getUserProfile(usrctx.currentUser.uid)
    console.log(userProf)
    setName(userProf.name)
    setEmail(userProf.email)
    setDob(userProf.dob)
    setPhone(userProf.phone)
    setInsta(userProf.instagramId)
    setTwitter(userProf.twitterId)
    setPhotoUrl(userProf.photo)
    setId(userProf.id)
  }
  
  useEffect(() => {
    getDetails()
  },[])

  {/* update main user */}
  const updateMainuser = () => {
    updateProfile(usrctx.currentUser, {
      displayName: name, photoURL: photoUrl
    }).then(()=>{router.reload(window.location.pathname)})
  }
  {/* update user profile */}
  const editProfile = (data) => {
    const collectionById = doc(database,'UserProfile',id)
    updateDoc(collectionById,data)
  }

  {/* profile image upload */}
  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function(onLoadEvent) {
      setPhotoUrl(onLoadEvent.target.result);
    }
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'Profile');

    const data = await fetch('https://api.cloudinary.com/v1_1/nexttrek/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setPhotoUrl(data.secure_url);
  }

  

  return (
    <div className='flex w-full h-fit'>
      <Navbar />
        <div className='m-auto my-[100px] flex flex-col md:flex-row md:w-[80%] w-[95%] h-fit rounded-lg shadow-xl relative overflow-hidden'>
            <div className='md:w-[40%] w-full flex h-full'>
              <div className='md:mt-[100px] mt-[30px] w-fit h-fit flex flex-col mx-auto'>
                <div className='relative w-[150px] h-[150px] flex rounded-full overflow-hidden'><Image layout='fill' objectFit='cover' objectPosition={'center'} src={photoUrl ? photoUrl : '/../public/images/profileimg.jpg'  } /></div>
                <h4 className=' mt-[20px] text-slate-900 w-[150px] text-[0.85rem] text-center'>Update Profile Image?
                  <form className='flex' method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                    <input type={'file'} className='text-[0.8rem]' name='file'/>
                    <button><MdAddCircleOutline className=' cursor-pointer'/></button>
                  </form>
                  <h2 className='overflow-hidden'>{photoUrl}</h2> 
                </h4>
              </div>
            </div>
            <div className='md:w-[60%] w-full flex flex-col md:h-full h-fit'>
              <h1 className='w-full text-center text-[2rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Profile</h1>
              <div className='w-full flex flex-col mb-[20px]'>
                
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Email :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'email'} readOnly value={email}/>
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Name :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={name} onChange={(e)=>{setName(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Date of Birth :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'date'} value={dob} onChange={(e)=>{setDob(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Phone Number :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'tel'} value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Instagram ID :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={insta} onChange={(e)=>{setInsta(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Twitter ID :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={twitter} onChange={(e)=>{setTwitter(e.target.value)}} />
                </label></div>

                <button className='w-[50%] mx-auto p-[5px] bg-sky-700 rounded-md text-white my-[5px]' onClick={() => {
                    editProfile({name:name,photo:photoUrl,dob:dob,phone:phone,instagramId:insta,twitterId:twitter,uid:usrctx.currentUser.uid,email:email});
                    updateMainuser();
                  }} >Update</button>
                <button className='w-[50%] mx-auto p-[5px] bg-red-700 rounded-md text-white my-[5px]' onClick={() => {
                    setName(userProf.name)
                    setEmail(userProf.email)
                    setDob(userProf.dob)
                    setPhone(userProf.phone)
                    setInsta(userProf.instagramId)
                    setTwitter(userProf.twitterId)
                    setPhotoUrl(userProf.photo)
                }}>Reset</button>
              </div>
            </div>
        </div>
    </div>
  )
}