// import React from 'react'
import img1 from "/img1.jpg"
import img2 from "/img2.jpg"
// import img3 from "/public/img3.jpg"
import img4 from "/img4.jpg"
import img5 from "/img5.jpg"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const HomeCarousel = () => {
  return (
    <>
     <Carousel className="rounded-lg mt-28">
  <CarouselContent  >
    <CarouselItem  >
      
    <img src={img2} alt="" className="relative rounded-lg"/>
      <span className="absolute flex flex-col text-5xl font-semibold text-white right-10 bottom-10 "><span className="text-blue-500">Near-Painless </span>Drug De-Addiction</span>
    </CarouselItem>
    <CarouselItem>
    <img src={img1} alt="" className="rounded-lg " />
     
    </CarouselItem>
    {/* <CarouselItem>
      <img src={img3} alt="" />

    </CarouselItem> */}
    <CarouselItem >
      <img src={img4} alt="" className="rounded-lg " />

    </CarouselItem>
    <CarouselItem>
      <img src={img5} alt="" className="rounded-lg "/>

    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel></>
  )
}

export default HomeCarousel

