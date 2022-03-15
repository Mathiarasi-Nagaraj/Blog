import React from 'react'
import FAQ from './FAQ'
import Footer from './Footer'
import Team from './Team'
import Testimonial from './Testimonial'

export default function About() {
  return (
    <div>
       <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between ">
        
                <div className="w-full lg:w-8/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold  text-gray-800 text-left mb-12">About Us</h1>

                    <p className="font-sans p-3 text-gray-600  text-xl ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-5/12  ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>
            </div>
       <Testimonial></Testimonial>
       <FAQ></FAQ>
<Footer></Footer>
    </div>
  )
}
