import React from 'react'
import post1 from '../assets/post1.jpg'

import { Link } from "react-router-dom";
export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  return (
    <div>

<div className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-5">
        <img className="w-full rounded-md" src={PF+post.photo} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            
          <Link to={`/post/${post._id}`} >
     {post.title}
          </Link>
            
            </div>
          <p className="text-gray-700 text-base">
{post.desc}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{post.Category}</span>
       
        </div>
        <div class="flex items-center mt-4">
                <a href="#" class="block relative">
                    <img alt="profil" src={PF+post.userphoto} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">
                       {post.username}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300">
                    {new Date(post.createdAt).toDateString()}
                    </p>
                </div>
                </div>
      </div>
    </div>
  )
}
