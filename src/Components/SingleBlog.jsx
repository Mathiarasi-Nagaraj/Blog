import React from 'react'


import { useEffect ,useState,useContext} from "react";
import { Context } from "../context/Context"
import { Link, useLocation } from "react-router-dom";
import { axiosInstance } from '../config';
export default function SingleBlog() {
  const PF = "http://localhost:5000/images/"
  const location=useLocation();
  console.log(location);
  const { user } = useContext(Context);
  const [updateMode, setUpdateMode] = useState(false);
  const path=location.pathname.split('/')[2];

  console.log(path);
  const [post, setpost] = useState([])
  useEffect(()=>
  {
    const getsinglepost=async()=>
    {
      const res=await axiosInstance.get('/post/'+path)
      console.log(res);
      setpost(res.data)
    }

    getsinglepost()
  },[])
  const [title, setTitle] = useState(" ");
  const [desc, setDesc] = useState(" ");
  const [file, setfile] = useState(null)
  const handleUpdate = async () => {
    try {
     const res= await axiosInstance.put(`/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      console.log(res)
      setUpdateMode(false)
    } catch (err) {
      console.log(err)
    }
  };

  const handeldelete=async()=>
  {
    try{
    const res=await axiosInstance.delete("/post/"+path,{username:user.username})
  console.log(res)
  window.location.replace("/")
    }catch(err)
    {
      console.log(err);
    }
  }

  return (
    <div className='my-10 w-[80%] m-auto'>
        {updateMode?<div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-solid rounded-md"><div className="space-y-1 text-center">
                                <svg
                                    className="w-12 h-12 mx-auto text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <p className='text-center align-middle'>Upload a file</p>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => setfile(e.target.files[0])} />
                                    </label>
                                   
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div></div>:<img src={PF+post.photo} className='object-cover w-full h-64 rounded-md'></img>}
        {!updateMode &&
        <h1 className='p-3 text-3xl font-bold text-center'>{post.title}</h1>}
        <div className='flex justify-between m-3'>
            <div>
            <h1 ><span className='text-2xl text-bold'>Author :</span><span className='text-xl italic'>{post.username}</span></h1>
            <span className='text-2xl text-bold'> Posted :</span><span className='text-xl italic'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {post.username===user?.username&&!updateMode&&
            <div>
            <i className="px-2 text-2xl font-bold text-blue-800 cursor-pointer far fa-edit" onClick={()=>setUpdateMode(true)}></i>
            <i className="px-2 text-2xl font-bold text-red-600 cursor-pointer far fa-trash-alt " onClick={handeldelete} ></i>
            </div>}
            {updateMode&&<div className='p-3 '><button
                            type="submit"
                            onClick={handleUpdate}
                            className="px-2 py-2 mr-5 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        > Update
  
                        </button>
                        
                        <button
                            type="submit"
                            onClick={()=>setUpdateMode(false)}
                            className="inline-flex justify-center px-2 py-2 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button></div>}
        </div>
        {updateMode ? (
          <div className='flex flex-col '>
            <input
            type="text"
            
            placeholder="Edit title"
            className="block py-2.5 mb-3 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
          
            className="block p-2.5 w-full text-lg  mt-5
            text-gray-900 bg-gray-50 rounded-lg border-none outline-none 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Edit your story...."
                             
           
            rows="10"
            onChange={(e) => setDesc(e.target.value)}>
            </textarea>

            </div>
        ) :
        <div className='text-xl text-center'>
{post.desc}
        </div>}
        </div>
  )
}
