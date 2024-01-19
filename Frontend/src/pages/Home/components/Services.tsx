// import React from 'react'
import { GiMedicines } from "react-icons/gi";

import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { PiStethoscope } from "react-icons/pi";
const Services = () => {
  return (
    <>
    <section
          className="flex flex-col w-full p-5 pt-8 mt-5"
          id="decoration"
        >
           <div className="my-5"> 
           <div className="flex justify-center">
           <h2 className="flex text-2xl font-bold text-black font-heading section-title md:text-3xl">
            Exciting Services of Drug DeAddict
          </h2>
           </div>
          <div className='h-[2px] bg-black text-black w-[45%] ml-[27%] my-1'></div>
          
          </div>
          
          <div className="grid grid-cols-3 gap-3 p-2 ">
            <div className="flex flex-col items-center justify-center px-4 py-10 rounded-lg shadow-md">
            <BsFillClipboard2PlusFill className="text-green-500 text-9xl"/>
              <h3 className="pt-6 text-lg font-medium font-heading">Consultation</h3>
              <div className="pb-4 font-subHeading">Consultation with a trusted doctor</div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-10 rounded-lg shadow-md">
            <PiStethoscope className="text-green-500 text-9xl"/>
              <h3 className="pt-6 text-lg font-medium font-heading">Doctor</h3>
              <div className="pb-4 font-subHeading">Thousands of doctors with specific experties</div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-10 rounded-lg shadow-md">
            <GiMedicines className="text-green-500 text-9xl"/>
              <h3 className="pt-6 text-lg font-medium font-heading">Online Pharmacy</h3>
              <div className="pb-4 font-subHeading">Get your Drug at your doorstep.</div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Services