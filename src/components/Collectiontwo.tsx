import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Collectiontwo({discount, collectionHeading, imgsrc}: {discount:number, collectionHeading:string, imgsrc: string}) {
    return (
        <div className="w-full lg:w-[55%] md:h-[400px] relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#f9f9f9] to-[#f4f6fd] p-8 rounded-lg shadow-lg">

            {/* Text Content */}
            <div className="space-y-4 flex flex-col  justify-center items-center md:items-start ">
                <p className="text-red-500  text-2xl font-bold">{discount}% Off</p>

                <h2 className="text-xl text-center md:text-start md:text-4xl font-bold text-gray-900 leading-tight">
                    {collectionHeading}
                </h2>
                <Link href={"/shop"}>
                <button className="transition-colors duration-500 ease-in-out hover:bg-[#cc0d39]  px-6 py-3 bg-black text-white font-medium rounded-full  ">
                    Shop Now
                </button>
                </Link>
            </div>

            {/* Image */}
            <div className="relative mt-10 md:mt-0">
                <div className=" absolute -top-10 -right-12 w-56 h-56 bg-gradient-radial from-[#ececec] to-transparent rounded-full"></div>
                <Image
                    src={`/images/banners/${imgsrc}`}
                    alt="Woman's Collection"
                    className="relative z-10 w-64 h-64 object-cover md:object-contain md:w-96 md:h-96"
                    height={300}
                    width={300}
                />
            </div>
        </div>
    )
}
