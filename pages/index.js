import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Banner from '../components/Banner' 

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className='flex flex-col sm:flex-row w-full h-fit mt-[4rem]'>
        <div className='px-[1.5rem] sm:px-[2rem] md:px-[4rem] w-full sm:w-[50%] h-fit sm:min-h-[50vh] flex flex-col'>
          <h1>Travel Destinations</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis, error deserunt fugiat veritatis magni aperiam assumenda recusandae laboriosam suscipit, voluptate enim numquam a? Beatae ratione labore animi ad voluptates!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis, error deserunt fugiat veritatis magni aperiam assumenda recusandae laboriosam suscipit, voluptate enim numquam a? Beatae ratione labore animi ad voluptates!
          </p>
          <button><Link href='/travel-blogs/'>Search Destinations</Link></button>
        </div>
        <div className='relative w-full sm:w-[50%] text-center h-fit my-auto'><Image  width={450} height={300} className="object-center" src={'/../public/dest-illustration.png'} /></div>
      </div>  
      <div className='flex flex-col sm:flex-row w-full h-fit mt-[4rem]'>
        <div className='relative hidden sm:block w-full sm:w-[50%] text-center h-fit my-auto'><Image  width={450} height={250} className="object-center" src={'/../public/blog.png'} /></div>
        <div className='px-[1.5rem] sm:px-[2rem] md:px-[4rem] w-full sm:w-[50%] h-fit sm:min-h-[50vh] flex flex-col'>
          <h1>Travel Blogs</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis, error deserunt fugiat veritatis magni aperiam assumenda recusandae laboriosam suscipit, voluptate enim numquam a? Beatae ratione labore animi ad voluptates!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis, error deserunt fugiat veritatis magni aperiam assumenda recusandae laboriosam suscipit, voluptate enim numquam a? Beatae ratione labore animi ad voluptates!
          </p>
          <button><Link href='/travel-blogs/'>Search Blogs</Link></button>
        </div>
        <div className='relative block sm:hidden w-full sm:w-[50%] text-center h-fit my-auto'><Image  width={450} height={250} className="object-center" src={'/../public/blog.png'} /></div>
      </div>
      <div></div>
    </div>
  )
}
