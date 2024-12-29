import HomeHeroSec from "@/components/HomeHeroSec";
import Image from "next/image";
import { Aoboshi_One } from 'next/font/google'
import CollectionOne from "@/components/CollectionOne";
import Collectiontwo from "@/components/Collectiontwo";

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

      {/* New Collection */}
      <div className="w-screen pb-20 pt-32 bg-[#fffaf3] flex flex-col justify-center items-center">
        {/* headings */}
        <div className="mb-20 flex flex-col juctify-center items-center gap-5">

          <div className="flex justify-center items-center gap-5">
            <Image src={"/images/icons/star-shine.svg"} width={15} height={15} alt={"star"} />
            <p className={`text-lg ${aboshi.className} text-[#d32d52] `}>New Collection</p>
            <Image src={"/images/icons/star-shine.svg"} width={15} height={15} alt={"star"} />
          </div>

          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${aboshi.className}`}>Shop New Collection</h1>
        </div>

        <div className="px-5 w-screen gap-5 flex justify-center items-center flex-wrap lg:flex-nowrap">

          <CollectionOne bgfrom="from-[#806b94]" bgto="to-[#ae98c6]" imgSrc="e-com-bannerimage1.jpg" discount={40} collectionHeading="collectionHeading" />

          <Collectiontwo imgsrc="e-com-banner-img2.png" discount={45} collectionHeading="Discover the Latest Women's Collection"  />
        </div>

        <div className="mt-10 md:mt-5 px-5 w-screen gap-5 flex justify-center items-center flex-wrap lg:flex-nowrap">

          <Collectiontwo imgsrc="e-com-banner-img3.png" discount={35} collectionHeading="Explore Fresh Arrivals in Women&quot;s Fashion" />

          <CollectionOne bgfrom="from-[#89695a]" bgto="to-[#daaa93]" imgSrc="e-com-banner-img4.png" discount={40} collectionHeading="Unveil New Trends in Women's Clothing
          " />
        </div>


      </div>

    </div>


  );
}
