import React from 'react'
import axios from "axios";

import { useEffect, useState } from "react";
import Create from '../Components/Create'
import Error from '../Components/Error'
import FAQ from '../Components/FAQ'

import Navbar from '../Components/Navbar'
import Post from '../Components/Post'
import SingleBlog from '../Components/SingleBlog'
import Slider from '../Components/Slider'
import Testimonial from '../Components/Testimonial'
import Login from './Login'
import Footer from '../Components/Footer';
import Write from '../Components/Write';

export default function Home() {
  const[posts,Setpost]=useState([]);
  useEffect(()=>
  {
    const fetchpost=async()=>{
      const res=await  axios.get("/post/")

    Setpost(res.data);

    }
   fetchpost()
    
  })
  return (
    <div>
        
        <Slider></Slider>
        <h1 className='text-4xl m-12 text-center'>Recent blogs</h1>
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
