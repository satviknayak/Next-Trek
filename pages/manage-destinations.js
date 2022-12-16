import Head from 'next/head';
import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAddCircleOutline,MdClose,MdOutlineCreate,MdDeleteOutline } from 'react-icons/md';
import Navbar from '../components/Navbar'
import { database } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc,doc } from 'firebase/firestore';

import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(import('react-quill'), { ssr: false })


const dbInstance = collection(database,'Destinations');

export default function managedestinations() {

  const router = useRouter()

  const [newDest,setNewDest] = useState(false);
  const [showUpdate,setShowUpdate] = useState(false);
  const [showDelete,setShowDelete] = useState(false);

  const [id,setId] = useState('')
  const [name,setName] = useState('')
  const [destUrl,setDestUrl] = useState('')
  const [description,setDescription] = useState('')
  const [tourArr,setTourArr] = useState([])
  const [imageSrc, setImageSrc] = useState()
  const [tourName,setTourName] = useState('')

  const [DestList,setDestList] = useState([])

  const addDesc = (value) => {setDescription(value)}

  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
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

    formData.append('upload_preset', 'next-trek-destinations');

    const data = await fetch('https://api.cloudinary.com/v1_1/nexttrek/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);
  }

  
  {/*function to add new Destination*/}
  const saveNewDest = (data) => {
    addDoc(dbInstance,data).then(()=>{router.reload(window.location.pathname)})
  }


  {/*function to Update Destination*/}
  const editDest = (data) => {
    const collectionById = doc(database,'Destinations',id)
    updateDoc(collectionById,data).then(()=>{router.reload(window.location.pathname)})
  }


  {/*function to delete Destination*/}
  const deleteDest = (id) => {
    const collectionById = doc(database,'Destinations',id)
    deleteDoc(collectionById).then(()=>{router.reload(window.location.pathname)})
  }


  {/* Function to get or read all the destinations */}
  const getDestinations = () => {
      getDocs(dbInstance)
          .then((data) => {
              setDestList(data.docs.map((item) => {
                  return { ...item.data(), id: item.id }
              }));
          })
  }
  useEffect(() => {
     getDestinations()
  }, [])



  return (
    <div className="flex min-h-screen w-full pt-[5rem] relative">
      <Head>
        <title>Manage Destinations</title>
      </Head>
      <Navbar/>
        <div className="flex w-full h-fit relative">
            <button className="absolute left-[1.5rem] sm:left-[2.5rem] text-[0.85rem] flex bg-violet-800 text-white p-[8px] rounded-md" onClick={()=>{setNewDest(!newDest)}}><MdOutlineCreate className='mx-[5px] my-auto'/>Add Destinations</button>
            <table className='mt-[3rem] mx-auto max-w-[500px] table-auto border-collapse border-[2px]'>
              <thead>
                <tr>
                  <th className='border-[2px] px-[10px] py-[2px]'>Sl.No</th>
                  <th className='border-[2px] px-[10px] py-[2px]'>Destination Name</th>
                  <th className='border-[2px] px-[10px] py-[2px]'>Update</th>
                  <th className='border-[2px] px-[10px] py-[2px]'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {DestList.map((e,index)=>(
                  <tr>
                    <td className='border-[1px] px-[10px] py-[2px]'>{index+1}</td>
                    <td className='border-[1px] px-[10px] py-[2px]'>{e.name}</td>
                    <td className='border-[1px] px-[10px] py-[2px]'><MdOutlineCreate className=' m-auto cursor-pointer' onClick={()=>{setShowUpdate(!showUpdate); setName(e.name); setDescription(e.description); setTourArr(e.tourArr); setDestUrl(e.photoUrl);setId(e.id)}}/></td>
                    <td className='border-[1px] px-[10px] py-[2px]'><MdDeleteOutline className=' m-auto cursor-pointer' onClick={()=>{setShowDelete(!showDelete);setDeleteInfo({id:e.id,name:e.name})}}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
        
        
        
        
        
        
        
        
        {/* Modal for adding new Destination */}
        <div className={`fixed top-0 z-[400] w-full h-screen bg-[#00000090] ${newDest ? 'flex': 'hidden'}`}>
          <div className='flex flex-col w-[300px] sm:w-[450px] mx-auto mt-[35px] h-[550px] bg-white rounded-xl relative p-[20px] overflow-y-auto scroll-hide'>
            <AiOutlineClose className='absolute sm:top-[16px] top-[10px] sm:right-[16px] right-[10px] text-[1.3rem]' onClick={()=>{setNewDest(!newDest)}}/>
            <h1 className='text-center text-[1.5rem] font-bold'>Add New Destination</h1>
            <div className='mt-[15px]'>
              <input type={'text'} className='mx-auto w-[90%] flex border-[1px] p-[5px] outline-none' placeholder='Enter Destination Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
              <input type={'text'} className='mx-auto w-[90%] flex border-[1px] p-[5px] mt-[5px] outline-none' placeholder='Enter Destination Photo Url' value={destUrl} onChange={(e)=>{setDestUrl(e.target.value)}} />
              <ReactQuill  theme='snow' className='w-[90%] h-[200px] mx-auto my-[10px]' onChange={addDesc}/>
              <div className='mt-[100px] w-[90%] flex flex-wrap mx-auto'>
              {tourArr?.map((a)=>(
                <span key={a.name} className='bg-violet-200 text-violet-700 rounded-full px-[10px] m-[5px] flex'>{a.name}<MdClose className='m-auto' onClick={(e)=>{
                  var dump = {}
                  for(var i=0;i<tourArr.length;i++){
                    if(tourArr[i].name == a.name){
                      dump = tourArr.splice(i,1)
                    }
                  }
                  setTourArr(tourArr)
                  e.currentTarget.parentElement.classList.add('hidden')
                }}/></span>
              ))}
              </div>
              <div className='w-[90%] flex flex-col mx-auto mt-[10px] relative'>
                  <form className='flex' method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                    <input type={'file'} className='text-[0.8rem]' name='file'/>
                    <button><MdAddCircleOutline className=' cursor-pointer'/></button>
                  </form> 
                <span className='text-[0.8rem] w-[75%] overflow-hidden flex'>{imageSrc}</span>
                <input type={'text'} className='text-[0.9rem] outline-none border-[1px] mt-[10px]' placeholder={'Location Name'} onChange={(e)=>{setTourName(e.target.value)}} value={tourName}/>
                <MdAddCircleOutline className='absolute right-[-20px] bottom-[12px] text-[1.2rem] cursor-pointer' onClick={() => {setTourArr(tourArr=>([...tourArr,{name:tourName,url:imageSrc}]))}}/>
              </div>
              <div className='w-[90%] mt-[15px] mx-auto justify-between flex text-white'>
                <button className='bg-sky-700 px-[10px] py-[5px] ml-[30px] rounded' onClick={()=>{saveNewDest({name:name,photoUrl:destUrl,description:description,tourArr:tourArr});setNewDest(!newDest);}}>Submit</button>
                <button className='bg-red-700 px-[10px] py-[5px] mr-[30px] rounded' onClick={()=>{setNewDest(!newDest);}}>Cancel</button>
              </div>
            </div>
          </div>
        </div>


        {/* Modal for Updating Destination */}
        <div className={`fixed top-0 z-[400] w-full h-screen bg-[#00000090] ${showUpdate ? 'flex': 'hidden'}`}>
          <div className='flex flex-col w-[300px] sm:w-[450px] mx-auto mt-[35px] h-[550px] bg-white rounded-xl relative p-[20px] overflow-y-auto scroll-hide'>
            <AiOutlineClose className='absolute sm:top-[16px] top-[10px] sm:right-[16px] right-[10px] text-[1.3rem]' onClick={()=>{setShowUpdate(!showUpdate)}}/>
            <h1 className='text-center text-[1.5rem] font-bold'>Upadte {name}</h1>
            <div className='mt-[15px]'>
              <input type={'text'} className='mx-auto w-[90%] flex border-[1px] p-[5px] outline-none' placeholder='Enter Destination Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
              <input type={'text'} className='mx-auto w-[90%] flex border-[1px] p-[5px] mt-[5px] outline-none' placeholder='Enter Destination Photo Url' value={destUrl} onChange={(e)=>{setDestUrl(e.target.value)}} />
              <ReactQuill  theme='snow' className='w-[90%] h-[200px] mx-auto my-[10px]' onChange={addDesc} value={description}/>
              <div className='mt-[100px] w-[90%] flex flex-wrap mx-auto'>
              {tourArr?.map((a)=>(
                <span key={a.name} className='bg-violet-200 text-violet-700 rounded-full px-[10px] m-[5px] flex'>{a.name}<MdClose className='m-auto' onClick={(e)=>{
                  var dump = {}
                  for(var i=0;i<tourArr.length;i++){
                    if(tourArr[i].name == a.name){
                      dump = tourArr.splice(i,1)
                    }
                  }
                  setTourArr(tourArr)
                  e.currentTarget.parentElement.classList.add('hidden')
                }}/></span>
              ))}
              </div>
              <div className='w-[90%] flex flex-col mx-auto mt-[10px] relative'>
                  <form className='flex' method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                    <input type={'file'} className='text-[0.8rem]' name='file'/>
                    <button><MdAddCircleOutline className=' cursor-pointer'/></button>
                  </form> 
                <span className='text-[0.8rem] w-[75%] overflow-hidden flex'>{imageSrc}</span>
                <input type={'text'} className='text-[0.9rem] outline-none border-[1px] mt-[10px]' placeholder={'Location Name'} onChange={(e)=>{setTourName(e.target.value)}} value={tourName}/>
                <MdAddCircleOutline className='absolute right-[-20px] bottom-[12px] text-[1.2rem] cursor-pointer' onClick={() => {setTourArr(tourArr=>([...tourArr,{name:tourName,url:imageSrc}]))}}/>
              </div>
              <div className='w-[90%] mt-[15px] mx-auto justify-between flex text-white'>
                <button className='bg-sky-700 px-[10px] py-[5px] ml-[30px] rounded' onClick={()=>{editDest({name:name,photoUrl:destUrl,description:description,tourArr:tourArr});setShowUpdate(!showUpdate);}}>Submit</button>
                <button className='bg-red-700 px-[10px] py-[5px] mr-[30px] rounded' onClick={()=>{setShowUpdate(!showUpdate);}}>Cancel</button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for deleting Destinations */}

    </div>
  )
}
