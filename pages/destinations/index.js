import Image from 'next/image'
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import DestinationCard from '../../components/DestinationCard';
import { useRouter } from 'next/router';
import { database } from '../../firebaseConfig';
import { collection, getDocs,getDoc } from 'firebase/firestore';


const dbInstance = collection(database,'Destinations');


export default function index() {

  const [DestDetail,setDestDetail] = useState({})
  const [ShowDest,setShowDest] = useState(false)

  const [DestList,setDestList] = useState([])
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
  },[])


  return (
    <div>

      <DestinationCard show={ShowDest} setShow={setShowDest} details={DestDetail} />
      <Navbar/>
      <div className="bg-banner-f flex md:h-[400px] h-[300px] w-full relative">
        <div className="w-full h-full flex bg-black opacity-40 absolute top-0 left-0"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full md:w-[80%] m-auto px-[20px] sm:px-[30px] py-[50px]">
      
        {DestList.map((a,index)=>(
          <div key={index} className='flex flex-col p-[10px] rounded-xl w-fit h-fit m-auto hover:scale-[1.1] transition-all duration-[1s] ease-in-out' onClick={()=>{setDestDetail(a),setShowDest(!ShowDest)}}>
          <div className='w-[100px] h-[100px] sm:w-[200px] rounded-xl flex sm:h-[200px] relative overflow-hidden'>
            <Image src={a.photoUrl} objectFit='cover' objectPosition={'center'} layout='fill' />
          </div>
          <h1 className='w-full text-center'>{a.name}</h1>
        </div>
        ))}
      </div>
    </div>
  );
}
