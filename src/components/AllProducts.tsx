
import React from 'react'
import ProductCard from './ProductCard'
import { Aoboshi_One } from 'next/font/google'
import { client } from '@/sanity/lib/client'


const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})

interface fetchProduct {
    name: string,
    price: number,
    slug: { current: string },
    image: {
        _type: 'image',
        asset: {
            _ref: string;
            _type: 'reference';
        },
        key: string

    }[],
    newProduct: boolean,
    premiumProduct: boolean,
    reviews: number,
    description: string
}



async function getData() {
    const data = await client.fetch(`
    *[_type == "product"  ][6...12] {
  name,
  price,
    slug,
    image,
    newProduct,
    premiumProduct,
    reviews,
    description
}
    `)

    return data
}

export const revalidate = 60



export default async function AllProducts() {

    const Data: fetchProduct[] = await getData()

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

                {
                    Data.map((item: fetchProduct) => (
                        <ProductCard key={item.slug.current} Price={item.price} descrition={item.description} newProduct={item.newProduct} premium={item.premiumProduct} name={item.name} reviews={item.reviews} imgSrc={item.image} />
                    ))
                }
            </div>

        </div>
    )
}
