import React from 'react'
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context"
import { axiosInstance } from '../config';
export default function Write() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [Category, setcat] = useState("General")
    const [file, setfile] = useState(null)
    const catogorey = ['Food', 'Life Style', 'Fashion', 'Travel','Business']
    const { user } = useContext(Context);
    const handelform = async (e) => {
        e.preventDefault();
        const newpost = {
            username: user.username,
            title,
            desc,
            Category
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newpost.photo = filename;
            try {

                await axiosInstance.post("/upload", data)

            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axiosInstance.post("/post", newpost);
            console.log(res);
            window.location.replace("/")
        } catch (err) {
            console.log(err);
        }
    }
    return (

       <div className=''>
            <form className='flex justify-center ' onSubmit={(e) => handelform(e)}>
                <div className='w-3/4 m-10 '>
                    <div className='mb-6'>

                        <label className="block text-lg font-medium text-gray-700">Blog Cover photo</label>
                        

                            {file ?<div className="flex justify-center mt-1 border-2 border-gray-300 border-solid rounded-md"><img
                                className="object-cover w-full p-2 rounded-md h-44"
                                src={URL.createObjectURL(file)}
                                alt=""
                            /> </div>: <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-solid rounded-md"><div className="space-y-1 text-center">
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
                            </div></div>
}
                    </div>


                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name"
                                id="floating_first_name"
                                autoFocus={true}
                                onChange={(e) => settitle(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog Title</label>
                        </div>
                        <div className="relative">
                            <select className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=>setcat(e.target.value)}>
                                {catogorey.map((cat) =>
                                (
                                    <option>{cat}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <textarea id="message"
                        autoFocus={true}
                        onChange={(e) => setdesc(e.target.value)}
                         rows="10"
                         className="block p-2.5 w-full text-lg 
 text-gray-900 bg-gray-50 rounded-lg border-none outline-none 
 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your story...."></textarea>
                    <div className="px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Publish
                        </button>
                    </div>

                </div>

            </form>
      </div>

    )
}
