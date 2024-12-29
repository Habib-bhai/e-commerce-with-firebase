import Image from 'next/image'
import React from 'react'

        export default function CollectionOne({discount, collectionHeading, imgSrc, bgfrom, bgto}: {discount: number, collectionHeading: string, imgSrc: string, bgfrom:string, bgto:string}) {
    return (
        <div className={`relative w-full md:w-[45%] md:h-[400px] flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden bg-gradient-to-r ${bgfrom} ${bgto}`}>
        
            {/* Content Container */}
            
                {/* Left Side - Text Content */}
                <div className="flex flex-col items-center md:items-start justify-center  gap-7 pl-3 pt-5"> 


                    {/* Discount Badge */}
                    <span className="bg-white  text-gray-800 px-4 text-sm h-[34px] flex justify-center  items-center rounded-md w-[125px] font-medium">
                        Up to {discount}% Off
                    </span>

                    {/* Heading */}   
                       
 
                        <h2 className=" w-[180px] md:w-[245px] text-center md:text-start text-xl md:text-2xl font-bold text-white">
                            {collectionHeading}
                        </h2>
                         

                    {/* Decorative Line */}
                    <div className="w-48 border-t-2 border-dotted border-white" />

                    {/* CTA Button */}
                    <button className="text-white border-2 border-white rounded-full   w-[133px] h-[35px] hover:bg-white hover:text-purple-600 transition-colors">
                        Shop Now
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="mt-10 md:mt-0 w-[230px] h-full flex flex-col justify-center items-center ">
                    <Image
                        src={`/images/banners/${imgSrc}`}
                        alt="Fashion model"
                        className="block md:absolute md:bottom-0 md:right-0 w-[200px] h-[236px] object-cover"
                        height={300} 
                        width={300}
                    />
                </div>
            </div>

    )
}
