import Categories from "@/components/Categories";
import HomeHeroSec from "@/components/HomeHeroSec";
import NewCollection from "@/components/NewCollection";
import Image from "next/image";
import { Aoboshi_One } from 'next/font/google'
import ProductCard from "@/components/ProductCard";


const aboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})




export default function Home() {
  return (
    <div
      className=" flex flex-col justify-center items-center"
    >
      <HomeHeroSec />
      <NewCollection />
      <Categories />

      {/* featured */}
      <div className="bg-[#fffaf3] w-screen pt-10 pb-20 flex flex-col justify-center items-center ">

        {/* hedings */}
        <div className={`${aboshi.className}  mb-14 flex flex-col justify-center items-center`}>
          <div className="flex justify-center items-center gap-3">
            <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
            <p className="text-[#cc0d39]">Categories</p>
            <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
          </div>
          <h1 className=" text-3xl md:text-4xl">Browse Top Categories </h1>
        </div>

        {/* Cards */}
        <div className="w-full flex justify-evenly items-center flex-wrap">

            <ProductCard imgSrc="Women-sweater.jpg"   />
            
            <ProductCard imgSrc="casual-suit.jpg"  />

            <ProductCard imgSrc="Coofandy_Mens_Short_Sleeve.jpg"  />

            <ProductCard  imgSrc="EKLENTSON_Men_jacket.jpg" />
        </div>

      </div>



    </div>


  );
}
