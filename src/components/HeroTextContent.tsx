import { Aoboshi_One } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const aoboshiOne = Aoboshi_One({
    subsets: ["latin"],
    weight: ['400']
})
export default function HeroTextContent() {

   

    return (
        <div className={`w-full flex flex-col justify-center items-start gap-8 ${aoboshiOne.className}`}>

            <div className="flex items-center gap-2 text-gray-600">
                <span className="text-red-600">★</span>
                <span className="uppercase font-medium tracking-wide">
                    BEST FOR YOUR CATEGORIES
                </span>
                <span className="text-red-600">★</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
                <span className="text-red-600  leading-4">Get 20% Off</span>{' '}
                <span className="text-navy-900  leading-4">Women Cloth Collections</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-xl">
                Enjoy 20% off on our entire Women&quot;s Clothing Collection! Discover stylish
                outfits for every occasion and save on your favorite pieces.
            </p>

            <Link href={"/shop"}>
            <button className="bg-[#13172b] text-white px-8 py-3 rounded-full hover:bg-navy-800 transition-colors duration-200">
                Shop Now
            </button>
            </Link>
        </div>
    )
}
