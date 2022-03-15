import React from 'react'
import post1 from '../assets/post1.jpg'
import axios from "axios";
import { useEffect ,useState,useContext} from "react";
import { Context } from "../context/Context"
import { Link, useLocation } from "react-router-dom";
export default function SingleBlog() {
  const PF = "http://localhost:5000/images/"
  const location=useLocation();
  console.log(location);
  const { user } = useContext(Context);
  const path=location.pathname.split('/')[2];
  console.log(path);
  const handeldelete=async()=>
  {
    try{
    const res=await axios.delete("/post/"+path,{username:user.username})
  console.log(res)
  window.location.replace("/")
    }catch(err)
    {
      console.log(err);
    }
  }
  const [post, setpost] = useState([])
  useEffect(()=>
  {
    const getsinglepost=async()=>
    {
      const res=await axios.get('/post/'+path)
      console.log(res);
      setpost(res.data)
    }

    getsinglepost()
  },[path])
  return (
    <div className='my-10 w-[80%] m-auto'>
        <img src={PF+post.photo} className='w-full h-64 object-cover rounded-md'></img>

        <h1 className='text-center text-3xl font-bold p-3'>{post.title}</h1>
        <div className='flex justify-between m-3'>
            <div>
            <h1 ><span className='text-bold text-2xl'>Author :</span><span className='italic text-xl'>{post.username}</span></h1>
            <span className='text-bold text-2xl'> Posted :</span><span className='italic text-xl'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {post.username===user?.username&&
            <div>
            <i className="px-2 far fa-edit text-blue-800 text-2xl font-bold cursor-pointer"></i>
            <i className="px-2 far fa-trash-alt text-2xl text-red-600 font-bold cursor-pointer " onClick={handeldelete} ></i>
            </div>}
        </div>
        <div className='text-center text-xl'>
{post.desc}
        </div>
        </div>
  )
}
