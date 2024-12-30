
import React from 'react'
import { Aoboshi_One } from 'next/font/google'
import Image from 'next/image'
import ProductCard from './ProductCard'


const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})

export default function AllProducts() {

    return (
        <div className='py-20 w-screen flex flex-col justify-center items-center'>
            {/* headings and buttons */}
            <div className={`${aboshi.className} w-full flex flex-col md:flex-row juctify-center md:justify-between items-center md:px-10 `}>
                {/* headings     */}
                <div className='flex flex-col justify-center items-start'>
                    <div className='flex gap-5 justify-center items-center'>
                        <span className="text-lg">✧</span>
                        <h3 className='text-[#dc2626] text-sm font-medium'>Shop Products</h3>
                    </div>
                    <h1 className='text-3xl md:text-4xl  '>Our Shop all Products</h1>
                </div>

                {/* buttons */}
                <div className='mt-10 md:mt-0  flex justify-center items-center gap-5 rounded-full border border-gray-500 h-[55px] text-sm px-4'>
                    <button className='h-[40px] rounded-full w-[100px] md:w-[125px] focus:bg-black focus:text-white transition duration-300 ease-in-out '> Best Seller</button>
                    <button className='h-[40px] rounded-full w-[100px] md:w-[125px] focus:bg-black focus:text-white transition duration-300 ease-in-out'>New Products</button>
                    <button className='h-[40px] rounded-full w-[100px] md:w-[125px] focus:bg-black focus:text-white transition duration-300 ease-in-out'>Sale Products</button>
                </div>
            </div>

            {/* cards */}
            <div className='mt-16 flex justify-center items-center flex-wrap gap-8'>

                <ProductCard Price={159.88} discountedPrice={110.50} name='Casual Women Suit' descrition='This is an Elegant women suit' newProduct={true} reviews={4.2} imgSrc='casual-suit-women.jpg' />

                <ProductCard Price={119.88} discountedPrice={90.50} name='Denim Jacket for Women' descrition='This is an Elegant Denim Female jacket' premium={true} reviews={4.2} imgSrc='denim_jacket_women.jpg' />

                <ProductCard Price={69.88} discountedPrice={49.50} name='This is a Hoodie' descrition='This is an Elegant Hoodie' newProduct={true} reviews={4.2} imgSrc='Hoodies-men.jpg' />

                <ProductCard Price={54.88} discountedPrice={30.50} name="Men&apos;s " descrition='This is an Elegant Men shirt' newProduct={true} reviews={4.2} imgSrc='Men-shirts.jpg' />



            </div>

        </div>
    )
}
