import React from 'react'

import { Aoboshi_One } from 'next/font/google'
import Image from 'next/image'


const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})

export default function Brands() {
    return (
        <div className='bg-[#fffaf3] py-20 w-screen flex flex-col juctify-center items-center'>

            {/* Headings */}
            <div className={` ${aboshi.className}  px-10 text-4xl  w-full flex flex-col md:flex-row justify-between items-center`}>
                <h1 className='lg:w-[600px]'>We continue to expand with
                    the trust of 10+ brand.</h1>
                <Image src={"/images/brand-btn.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[150px] h-[150px] object-cover' />
            </div>

            <div className='w-full  flex justify-center items-center flex-wrap mx-10 gap-5'>

                <div className='mt-8 md:mt-0  bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-1.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-2.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-3.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-4.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-5.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-6.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-7.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-8.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-9.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
                <div className='bg-white w-[214px] h-[110px] flex justify-center items-center'>
                    <Image src={"/images/brand-10.png"} alt='brand' height={300} width={300} className='mt-14 md:mt-0 w-[102px] h-[40px] bg-white object-contain' />
                </div>
            </div>

        </div>
    )
}
