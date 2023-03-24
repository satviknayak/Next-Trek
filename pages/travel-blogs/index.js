import Image from 'next/image'
import { useState,useContext,useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { getDocs,collection,deleteDoc,doc,updateDoc } from 'firebase/firestore'
import { database } from '../../firebaseConfig'
import AddBlog from '../../components/AddBlog';
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router';
import {MdCreate,MdDelete} from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import dynamic from "next/dynamic";


const dbInstance = collection(database,'Blogs');
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function TravelBlogs() {

  const router = useRouter()

  const addDesc = (value) => {setDescription(value)}

  const [showAddBlog,setShowAddBlog] = useState(false)
  const [showDelete,setShowDelete] = useState(false)
  const [showEdit,setShowEdit] = useState(false)
  const [deleteId,setDeleteId] = useState('')
  const [details,setDetails] = useState()

  const userctx = useContext(AuthContext)

  const [BlogList,setBlogList] = useState([])
  {/* Function to get or read all the Blogs */}
  const getBlogs = () => {
    getDocs(dbInstance)
        .then((data) => {
            setBlogList(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
        })
  }
  useEffect(() => {
    getBlogs()
  },[])

  const deleteBlog = () => {
    const collectionById = doc(database,'Blogs',deleteId)
    deleteDoc(collectionById).then(()=>{router.reload(window.location.pathname)}).catch((err)=>{console.log(err)})
  }


  const [id,setId] = useState('')
  const [username,setUserName] = useState('')
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [date,setDate] = useState('')
  const [Uuid,setUuid] = useState('')

  {/*function to Update Blog*/}
  const editBlog = (data) => {
    const collectionById = doc(database,'Blogs',id)
    updateDoc(collectionById,data).then(()=>{router.reload(window.location.pathname)})
  }


  return (
    <div>
      <Navbar />
      <AddBlog show={showAddBlog} setShow={setShowAddBlog} />
   <div className="bg-banner-s flex md:h-[400px] h-[300px] w-full relative">
        <div className="w-full h-full flex bg-black opacity-40 absolute top-0 left-0"></div>
      </div>

      <div className="flex flex-col min-h-screen w-full md:w-[80%] m-auto px-[20px] sm:px-[30px] relative pt-[75px]">

      {userctx.currentUser === null ? <></>:<button className='p-[5px] bg-sky-700 absolute right-[20px] rounded-md text-white top-[20px]' onClick={()=>{setShowAddBlog(true)}}>ADD BLOG</button> } 
      
      {BlogList?.map((a,index)=>(
        <div key={index} className='flex flex-col max-w-[600px] min-w-[250px] sm:min-w-[500px] h-fit p-[5px] sm:px-[15px] mx-[auto] my-[25px] rounded-xl shadow-2xl border-[1px] border-slate-500'>
          <div className='flex w-full h-fit justify-between'>
            <div>
              <h1 className='text-[0.95rem] font-bold'>{a.title}</h1>
              <h2 className='text-[0.85rem]'>{a.username}</h2>
              <h3 className='text-[0.8rem]'>{a.date}</h3>
            </div>
            <div className={`${userctx.currentUser === null ? 'hidden' : userctx.currentUser.uid === a.uid ? 'flex' : 'hidden'} w-[50px] h-fit flex-col`} >
              <MdCreate className='mx-auto my-[5px] text-[1.2rem] cursor-pointer' onClick={()=>{
                setId(a.id);setUuid(a.uid);setTitle(a.title);setDescription(a.description);setUserName(a.username);setDate(a.date);
                setShowEdit(!showEdit); console.log(a,details)
              }}/>
              <MdDelete className='mx-auto my-[5px] text-[1.2rem] cursor-pointer' onClick={()=>{setDeleteId(a.id);setShowDelete(!showDelete)}}/>
            </div>
          </div>
          <div className='flex max-w-[500px] mx-auto text-[0.8rem]' dangerouslySetInnerHTML={{ __html: a.description }}></div>
        </div>
      ))}

      </div>

        

        <div className={`fixed w-full h-screen top-0 bg-[#00000090] ${showDelete? 'flex':'hidden'} `}>
          <div className='bg-white w-fit h-fit mt-[100px] mx-auto flex flex-col p-[10px] rounded-xl'>
            <h1 className='mb-[10px] text-red-600 font-bold text-center text-[1.2rem]'>Delete Blog</h1>
            <p>Are you sure you want to delete the blog?</p>
            <button className='text-white bg-red-600 py-[5px] px-[10px]' onClick={()=>{deleteBlog();setShowDelete(!showDelete)}}>Delete</button>
            <button className='' onClick={()=>{setShowDelete(!showDelete)}}>Cancel</button>
          </div>
        </div>

        <div className={`bg-[#00000090] ${showEdit ? 'flex' :'hidden'}  w-full h-screen fixed top-0 left-0 z-[500]`}>
        <div className='bg-white flex flex-col sm:w-[500px] w-[300px] h-[600px] m-auto rounded-lg relative overflow-y-auto scroll-hide'>
        <AiOutlineClose className='text-[2rem] absolute top-[10px] right-[10px] cursor-pointer' onClick={()=>{setShowEdit(false)}} />
            <h1 className='w-full text-center font-bold text-[2rem] text-violet-700 mt-[30px]'>Update Blog</h1>
            <div className='flex flex-col'>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Username :</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={username} onChange={(e)=>{setUserName(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Date:</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'date'} value={date} onChange={(e)=>{setDate(e.target.value)}} />
                </label></div>
                <div className='w-[80%] flex mx-auto'><label className='flex-col flex my-[10px] w-full'> <span>Title:</span>
                  <input className='w-full mx-auto bg-gray-300 h-[35px] rounded-sm outline-none border-none px-[7px]' type={'text'} value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </label></div>
                <ReactQuill theme='snow' className='w-[90%] h-[200px] mx-auto my-[10px]'  onChange={addDesc} value={description}/>
                <button className='w-[50%] mx-auto p-[5px] bg-sky-700 rounded-md text-white my-[5px] mt-[75px]' onClick={()=>{
                  editBlog({username:username,uid:Uuid,title:title,description:description,date:date})
                  setShowEdit(!showEdit)
                }}>Edit Blog</button>
            </div>
        </div>
    </div>

    </div>
  );
}
