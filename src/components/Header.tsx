"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { DM_Sans } from "next/font/google"
import Link from 'next/link';
import { Aoboshi_One } from 'next/font/google';

const aoboshiOne = Aoboshi_One({
    subsets: ["latin"],
    weight: ['400']
})

const dmsans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function Header() {

        const [sidebar, setSidebar] = useState("hidden")

    return (
        <div className='overflow-x-hidden w-screen relative'>
            {/* primary part */}
            <div className={`${dmsans.className} p-3 bg-[#feeb9d]  md:flex justify-between items-center w-full px-10 hidden `}>

                {/* free shipping heading and icon */}
                <div className='flex justify-center items-center gap-2'>
                    <Image src={"/images/icons/shipping-fast.svg"} width={20} height={20} alt={"shipping-fast"} />
                    <p>Free Shipping</p>
                </div>


                {/* operator number, follow us and socials */}
                <div className='flex justify-center items-center gap-3'>
                    <div className={`${dmsans.className}  bg-[#feeb9d]  flex justify-center items-center gap-1`}>
                        <Image src={"/images/icons/telephone-operator.svg"} width={20} height={20} alt={"operator"} />
                        <p className='text-black font-semibold '>+94 123 4567 894</p>
                    </div>

                    <Image src={"/images/icons/star.svg"} width={15} height={15} alt={"star"} />

                    <p>Follow Us</p>
                    <div className='flex gap-2'>

                        <Image src={"/images/icons/facebook.svg"} width={25} height={25} alt={"facebook"} />
                        <Image src={"/images/icons/instagram.svg"} width={25} height={25} alt={"instagram"} />
                        <Image src={"/images/icons/twitter.png"} width={20} height={20} alt={"twitter"} className='object-contain' />
                        <Image src={"/images/icons/linkedin-161.svg"} width={20} height={20} alt={"youtube"} />
                    </div>
                </div>
            </div>





            {/* secondary part Navbar */}
            <div className={`${aoboshiOne.className} font-semibold relative flex justify-around items-center   gap-3 bg-white shadow-black shadow-sm`}>
                <Image src={"/images/logos/logo-removebg.png"} width={100} height={100} alt={"logo"} />

                {/* routes */}
                <div className='hidden md:flex justify-center items-center gap-5'>
                    <Link href="/">Home</Link>
                    <Link href="/shop">shop</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                {/* search, wishlist, cart */}
                <div className='hidden  md:flex justify-center items-center gap-4'>
                    <Image src={"/images/icons/search.svg"} alt='search' height={20} width={20} />
                    <Image src={"/images/icons/star.svg"} alt='search' height={15} width={15} />
                    <Image src={"/images/icons/heart.svg"} alt='search' height={20} width={20} />
                    <Image src={"/images/icons/star.svg"} alt='search' height={15} width={15} />
                    <Image src={"/images/icons/shopping-bag.svg"} alt='search' height={20} width={20} />

                </div>

                <Image onClick={()=> setSidebar("flex")} src={"/images/icons/hamburger.svg"} alt='hamburger' width={40} height={40} className='block md:hidden' />
            </div>

            {/* sidebar */}
            <div className={`${sidebar} flex-col md:hidden gap-5 bg-gray-400/65 shadow-black shadow-sm z-20 w-full  relative`}>

                {/* search, wishlist, cart */}
                <div className='flex justify-center items-center gap-8 w-full  flex-col'>

                    <div className='mt-14 flex justify-center items-center w-80 gap-2 bg-white h-10 rounded-md'>
                        <input type="text" placeholder='search' className='bg-white outline-none  h-[90%]' />
                        <Image src={"/images/icons/search.svg"} alt='search' height={20} width={20} />
                    </div>
                    <div className='flex justify-start items-center gap-2' >
                        <Image src={"/images/icons/heart.svg"} alt='search' height={40} width={40} />
                        <Image src={"/images/icons/star.svg"} alt='search' height={20} width={20} />
                        <Image src={"/images/icons/shopping-bag.svg"} alt='search' height={40} width={40} />

                    </div>
                </div>

                {/* routes */}

                <div className={`${aoboshiOne.className} text-2xl flex flex-col  justify-center items-center mt-10 mb-12 gap-5 `}>
                    <Link href="/">Home</Link>
                    <Link href="/shop">shop</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <Image src={"/images/icons/cross.svg"} alt='close' height={40} width={40} onClick={() => setSidebar("hidden")} className='absolute right-5 top-1'/>
            </div>
        </div>
    )
}
