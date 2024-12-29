import Image from 'next/image'
import React from 'react'
import { Aoboshi_One } from 'next/font/google'
const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})

export default function CategoryCard({ category, items, imgsrc }: { category: string, items: number, imgsrc: string }) {
    return (
        <div className='mt-7 md:mt-0 flex flex-col justify-center items-center w-screen min-[500px]:w-[185px]'>

            <Image src={`/images/categories/${imgsrc}`} alt='category' height={180} width={180} className='rounded-full z-10' />


            <div className={`${aboshi.className} group bg-white w-full h-[180px] pb-5 flex flex-col justify-end items-center -mt-20 transition-colors duration-500 ease-in-out hover:bg-[#cc0d39] hover:text-white`}>
                <h1 className='text-xl'>{category}</h1>
                <p className='transition-colors duration-500 ease-in-out text-sm text-gray-600 group-hover:text-white'>{items} items</p>
            </div>
        </div>
    )
}
