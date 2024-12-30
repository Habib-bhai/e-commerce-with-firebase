
import Image from 'next/image'
import React from 'react'
import HeroTextContent from './HeroTextContent'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"





export default function HomeHeroSec() {
    return (
        <div className="relative w-screen  bg-[#f8f3ef]">
            {/* Main container */}
            <div className="w-full  pl-4 sm:pl-6 lg:pl-8 ">


                <div className="flex flex-col lg:flex-row items-center justify-between  py-12">
                    {/* Left content div */}
                    <div className=" w-full lg:w-1/2  z-10">

                        <Carousel 
                        opts={{
                            loop: true,
                          }}
                        >
                            <CarouselContent>
                                <CarouselItem>
                                    <HeroTextContent />
                                </CarouselItem>

                                <CarouselItem>
                                    <HeroTextContent />
                                </CarouselItem>

                                <CarouselItem>
                                    <HeroTextContent />
                                </CarouselItem>

                            </CarouselContent>
                            <CarouselPrevious  className='top-[90%] left-[40%]  lg:top-[120%] lg:left-1 h-16 w-16'/>
                            <CarouselNext className='top-[90%] right-[35%] lg:top-[120%] lg:right-[75%] h-16 w-16'/>
                        </Carousel>
                    </div>


                    {/* Right image div */}
                    <div className="hidden lg:block w-full  lg:w-1/2 relative ">
                        {/* Purple background shape */}
                        <div className="absolute inset-0 bg-purple-400  mt-20 lg:mt-0 md:rounded-l-full"></div>

                        {/* Image container */}
                        <div className="relative z-10">
                            <Image
                                src="/images/hero-imgs/e-com-heroimg.jpg"
                                alt="Woman in fashion clothing"
                                className="w-full h-full object-cover mt-20 lg:mt-0 md:rounded-l-full"
                                height={1000}
                                width={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
