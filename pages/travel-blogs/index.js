import Image from 'next/image'
import { useState,useContext,useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { getDocs,collection } from 'firebase/firestore'
import { database } from '../../firebaseConfig'
import AddBlog from '../../components/AddBlog';
import Navbar from '../../components/Navbar'
import {MdCreate,MdDelete} from 'react-icons/md'


const dbInstance = collection(database,'Blogs');

export default function index() {
  const [showAddBlog,setShowAddBlog] = useState(false);
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
              <MdCreate className='mx-auto my-[5px] text-[1.2rem]' onClick={()=>{}}/>
              <MdDelete className='mx-auto my-[5px] text-[1.2rem]' onClick={()=>{}}/>
            </div>
          </div>
          <div className='flex max-w-[500px] mx-auto text-[0.8rem]' dangerouslySetInnerHTML={{ __html: a.description }}></div>
        </div>
      ))}

      </div>
    </div>
  );
}
