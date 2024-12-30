import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'
import { Aoboshi_One } from 'next/font/google'


const aboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})

export default function FeaturedProducts() {
  return (
    <div className="bg-[#fffaf3] w-screen pt-10 pb-20 flex flex-col justify-center items-center ">

    {/* hedings */}
    <div className={`${aboshi.className}  mb-14 flex flex-col justify-center items-center`}>
      <div className="flex justify-center items-center gap-3">
        <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
        <p className="text-[#cc0d39]">Feature Products
        </p>
        <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
      </div>
      <h1 className=" text-3xl md:text-4xl">Our Features Collection</h1>
    </div>

    {/* Cards */}
    <div className="w-full flex justify-evenly items-center flex-wrap">

        <ProductCard Price={64.00} discountedPrice={45.60} descrition="Experience the premium quality sweaters" newProduct={true} name="Women Sweater" reviews={4.2} imgSrc="Women-sweater.jpg"   />
        
        <ProductCard Price={104} discountedPrice={90.60} descrition="Experience the premium quality casual-suit" premium={true} name="Casual Suits" reviews={4.2}  imgSrc="casual-suit.jpg"  />

        <ProductCard Price={70} discountedPrice={50.60} descrition="Experience the premium quality Coofandy_Mens_Short_Sleeve" newProduct={true} name="Men&quot;s short sleeve shirts" reviews={4.2}  imgSrc="Coofandy_Mens_Short_Sleeve.jpg"  />

        <ProductCard Price={50} discountedPrice={25.60} descrition="Experience the premium quality EKLENTSON_Men_jacket" premium={true} name="Men&quot;s jacket" reviews={4.2}  imgSrc="EKLENTSON_Men_jacket.jpg" />
    </div>

  </div>
  )
}
