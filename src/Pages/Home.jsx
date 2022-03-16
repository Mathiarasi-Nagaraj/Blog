import React from 'react'

import { useEffect, useState } from "react";

import Post from '../Components/Post'
import { axiosInstance } from '../config';

export default function Home() {
  const[posts,Setpost]=useState([]);
  useEffect(()=>
  {
    const fetchpost=async()=>{
      const res=await  axiosInstance.get("/post/")

    Setpost(res.data);

    }
   fetchpost()
    
  },[])
  return (
    <div>
        
        <Slider></Slider>
        <h1 className='m-12 text-4xl text-center'>Recent blogs</h1>
        <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
         
           
            {
                    
                    (posts.length)?(
            
                    posts.map((post)=>
                    (
                      
                    <Post post={post} ></Post>
                   
                    ))):<div>Loading</div>
            }
          
          </div>
        </div>
      </section>
        

   

    
    </div>
  )
}
