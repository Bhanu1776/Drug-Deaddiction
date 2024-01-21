import React from 'react'
import img3 from "/img3.jpg"
const Activities = () => {
  return (
    <>
    <div className="flex flex-col p-5 mt-5">
    <div className="my-5"> 
           <div className="flex justify-center">
           <h2 className="flex text-2xl font-bold text-black font-heading section-title md:text-3xl">
           Activites Perform to Motivate
          </h2>
           </div>
          <div className='h-[2px] bg-black text-black w-[45%] ml-[27%] my-1'></div>
          
          </div>
        <div className='flex '>
            <div className='flex flex-col p-5'>
            <div className="flex flex-col items-center justify-center px-4 py-10 rounded-lg shadow-md">
            {/* <BsFillClipboard2PlusFill className="text-green-500 text-9xl"/> */}
              <h3 className="pt-6 text-lg font-medium font-heading">Discipline</h3>
              <div className="pb-4 font-subHeading">Dialectical behaviour therapy</div>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-10 rounded-lg shadow-md">
            {/* <BsFillClipboard2PlusFill className="text-green-500 text-9xl"/> */}
              <h3 className="pt-6 text-lg font-medium font-heading">Learning</h3>
              <div className="pb-4 font-subHeading">Educational Classes</div>
            </div>
            </div>
            <div>
                <img src={img3} alt=""  />
            </div>
            <div className='flex flex-col p-5'>
            <div className="flex flex-col items-center justify-center px-4 py-10 rounded-lg shadow-md">
            {/* <BsFillClipboard2PlusFill className="text-green-500 text-9xl"/> */}
              <h3 className="pt-6 text-lg font-medium font-heading">Knowledge</h3>
              <div className="pb-4 font-subHeading">Cognitive behavioral therapy</div>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-10 rounded-lg shadow-md">
            {/* <BsFillClipboard2PlusFill className="text-green-500 text-9xl"/> */}
              <h3 className="pt-6 text-lg font-medium font-heading">Free Time</h3>
              <div className="pb-4 font-subHeading">Games,book reading, watching movies</div>
            </div>
</div>

        </div>
    </div>
    </>
  )
}

export default Activities