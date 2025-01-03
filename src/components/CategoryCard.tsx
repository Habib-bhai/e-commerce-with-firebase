import Image from 'next/image'
import React from 'react'
import { Aoboshi_One } from 'next/font/google'
import Link from 'next/link'
const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})

export default function CategoryCard({ category, items, imgsrc }: { category: string, items: number, imgsrc: string }) {
    return (
        <div className='mt-7 md:mt-0 flex flex-col justify-center items-center w-screen min-[500px]:w-[185px]'>

            <Image src={`/images/categories/${imgsrc}`} alt='category' height={500} width={500} className='w-[180px] h-[180px] object-cover rounded-full z-10' />

             <Link href={"/shop"} className='group bg-white w-full h-[180px] pb-5 flex flex-col justify-end items-center -mt-20 transition-colors duration-500 ease-in-out hover:bg-[#cc0d39] hover:text-white'>
            <div className={`${aboshi.className} `}>
                <h1 className='text-xl'>{category}</h1>
                <p className='transition-colors duration-500 ease-in-out text-sm text-gray-600 group-hover:text-white'>{items} items</p>
            </div>
             </Link>   
        </div>
    )
}
