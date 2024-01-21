import React from 'react'
import { drugData } from '@/data/HomePageData'

const Information = () => {
  return (
    <div className="flex flex-col items-center h-screen mx-48 mb-3">

    <div className='pt-2'>
    <div className='flex mt-8 mb-3 text-5xl font-bold text-center font-subHeading'>Important Information</div>
    <div className='h-[2px] bg-black text-black w-[95%] '></div>
    </div>
    {drugData?.map((datad)=>{
    return(<div className='w-full p-4 my-2 rounded-md shadow-md'>
    <h1  className='text-3xl font-bold font-heading '>{datad.heading}</h1>
    <div>{datad?.data?.map((head)=>{
    return(
        <>
        <h1 className='py-2 text-lg font-semibold'>{head.subheading}</h1>
        <p className='text-base font-normal font-subHeading'>{head.para}</p>
        </>

        )
    })}</div>

</div>)
    })}
    
    </div>
  )
}

export default Information