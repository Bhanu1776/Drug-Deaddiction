import React from 'react'
import { treatment } from '@/data/HomePageData'
const Treatment = () => {
  return (
    <>
    
    <div className='pt-2'>
    <div className='flex mt-8 mb-3 text-5xl font-bold text-center font-heading'>Ways Of Treatment</div>
    <div className='h-[2px] bg-black text-black w-[95%] '></div>
    </div>
    {treatment?.map((data)=>{
    return(<div className='w-full p-4 my-2 rounded-md shadow-md bg-[#f1eff8]'>
    <h1  className='py-2 text-3xl font-bold font-subHeading'>{data.heading}</h1>
    <div>{data?.data?.map((head)=>{
    return(
        <>
        <h1 className='py-2 text-lg font-bold'>{head.heading}</h1>
        <p className='text-base font-normal font-subHeading'>{head.para}</p>
        </>

        )
    })}</div>

</div>)
    })}
    </>
  )
}

export default Treatment