import React from "react";
import { useRef } from "react";
const UserSetting = () => {
    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        // console.log("payload", payload);
        // Place your API call here to submit your payload.
    };
    return (
        <form id="login" onSubmit={handleSubmit} className="mx-20 ">
            <div className="m-1 m-20 text-xl bg-white dark:bg-gray-80">
                <div className="container mx-auto bg-white rounded dark:bg-gray-800">
                    <div className="py-5 bg-white border-b border-gray-300 xl:w-full dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center w-11/12 mx-auto xl:w-full xl:mx-0">
                            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">Profile</p>
                            <div className="ml-2 text-gray-600 cursor-pointer dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-11/12 mx-auto xl:w-9/12 xl:mx-0">
                            <div className="relative h-48 mt-8 rounded">
                                <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg" alt className="absolute object-cover w-full h-full rounded shadow" />
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black rounded opacity-50" />
                                <div className="absolute right-0 flex items-center px-3 py-2 mt-4 mr-4 rounded cursor-pointer">
                                    <p className="text-xs text-gray-100">Change Cover Photo</p>
                                    <div className="ml-2 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 flex items-center justify-center w-20 h-20 ml-12 -mb-10 bg-center bg-no-repeat bg-cover rounded-full shadow">
                                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt className="absolute top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-full rounded-full shadow" />
                                    <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-black rounded-full opacity-50" />
                                    <div className="z-10 flex flex-col items-center justify-center text-gray-100 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                        <p className="text-xs text-gray-100">Edit Picture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-16 xl:w-2/6 lg:w-1/2 md:w-1/2">
                                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Username
                                </label>
                                <input type="text" id="username" name="username" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="@example" />
                            </div>
                            <div className="flex flex-col w-full mt-8 xl:w-3/5 lg:w-1/2 md:w-1/2">
                                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Email
                                </label>
                                <input type="text" id="username" name="username" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="@example" />
                            </div>
                            <div className="flex flex-col w-full mt-8 xl:w-3/5 lg:w-1/2 md:w-1/2">
                                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Password
                                </label>
                                <input type="text" id="username" name="username" required className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-400" placeholder="@example" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w-11/12 mx-auto xl:w-full">
                    <div className="flex justify-end w-full py-4 bg-white sm:px-0 dark:bg-gray-800">
                        <button className="px-6 py-2 mr-4 text-xs text-indigo-600 transition duration-150 ease-in-out bg-gray-200 rounded focus:outline-none hover:bg-gray-300 dark:bg-gray-700 dark:text-indigo-600">Cancel</button>
                        <button className="px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600" type="submit">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default UserSetting;
