import HomeHeroSec from "@/components/HomeHeroSec";
import NewCollection from "@/components/NewCollection";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import { Aoboshi_One } from 'next/font/google'
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

      {/* Categories */}
      <div className="bg-[#fffaf3] pt-20 pb-20 w-screen flex flex-col justify-center items-center">
        <div className=" flex flex-col md:flex-row w-full px-5 justify-between items-center">


          <div className={`${aboshi.className} mb-4 flex flex-col justify-center items-start`}>
            <div className="flex justify-center items-center gap-3">
              <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
              <p className="text-[#cc0d39]">Categories</p>
              <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
            </div>
            <h1 className=" text-3xl md:text-4xl">Browse Top Categories </h1>
          </div>


          <button className={`${aboshi.className} w-[165px] h-[56px] bg-black rounded-full text-white`}>View All</button>

        </div>

        <div className="mt-10 flex justify-center items-center px-0 sm:px-10  flex-wrap gap-10">
         <CategoryCard category="Man Shirts" items={10} imgsrc="e-com-category-7.jpg"/>
         <CategoryCard category="Denim Jeans" items={45} imgsrc="e-com-category-8.jpg" />
         <CategoryCard category="Casual Suit" items={30} imgsrc="e-com-category-9.jpg"/>
         <CategoryCard category="Summer Dress" items={36} imgsrc="e-com-category-10.jpg"/>
         <CategoryCard category="Sweaters" items={24} imgsrc="e-com-category-11.jpg" />
         <CategoryCard category="Jackets" items={6} imgsrc="e-com-category-12.jpg" />
        </div>
      </div>



    </div>


  );
}
