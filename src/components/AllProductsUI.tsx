"use client"
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { Aoboshi_One } from 'next/font/google'
import { fetchProduct } from './AllProducts'


const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})

export default function AllProductsUI({data}: {data:fetchProduct[]}) {
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [products, setProducts] = useState<fetchProduct[]>(data)

    const filterProducts = (tag: string) => {
        if (tag === 'all') {
            setSelectedTags([])
            setProducts(data)
        } else {
            const newSelectedTags = selectedTags.includes(tag)
                ? selectedTags.filter(t => t !== tag)
                : [...selectedTags, tag]

            setSelectedTags(newSelectedTags)

            if (newSelectedTags.length === 0) {
                setProducts(data)
            } else {
                const filteredProducts = data.filter(product =>
                    newSelectedTags.some(tag =>
                        product.tags.some(productTag =>
                            productTag.toLowerCase() === tag.toLowerCase()
                        )
                    )
                )
                setProducts(filteredProducts)
            }
        }
    }

    const isTagActive = (tag: string) => selectedTags.includes(tag)

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
                 <div className='mt-10 md:mt-0 flex flex-wrap justify-center items-center gap-5 rounded-full border border-gray-500 h-28 text-sm px-10'>
                    <button 
                        onClick={() => filterProducts('all')}
                        className={`h-[40px] rounded-full w-[100px] md:w-[125px] transition duration-300 ease-in-out ${selectedTags.length === 0 ? 'bg-black text-white' : ''}`}
                    >
                        All Products
                    </button>
                    <button 
                        onClick={() => filterProducts('premium')}
                        className={`h-[40px] rounded-full w-[100px] md:w-[125px] transition duration-300 ease-in-out ${isTagActive('premium') ? 'bg-black text-white' : ''}`}
                    >
                        Premium
                    </button>
                    <button 
                        onClick={() => filterProducts('new arrival')}
                        className={`h-[40px] rounded-full w-[100px] md:w-[125px] transition duration-300 ease-in-out ${isTagActive('new arrival') ? 'bg-black text-white' : ''}`}
                    >
                        New Arrival
                    </button>
                    <button 
                        onClick={() => filterProducts('popular')}
                        className={`h-[40px] rounded-full w-[100px] md:w-[125px] transition duration-300 ease-in-out ${isTagActive('popular') ? 'bg-black text-white' : ''}`}
                    >
                        Popular
                    </button>
                </div>
            </div>

            {/* cards */}
            <div className='mt-16 flex justify-center items-center flex-wrap gap-8'>

                {
                    products.map((item: fetchProduct) => (
                        <ProductCard slug={item.slug} key={item.slug.current} Price={item.price} descrition={item.description} newProduct={item.newProduct} premium={item.premiumProduct} name={item.name} reviews={item.reviews} imgSrc={item.image} />
                    ))
                }
            </div>

        </div>
    )
}
