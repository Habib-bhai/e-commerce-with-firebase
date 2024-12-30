import Categories from "@/components/Categories";
import HomeHeroSec from "@/components/HomeHeroSec";
import NewCollection from "@/components/NewCollection";

import FeaturedProducts from "@/components/FeaturedProducts";
import TodaysDeal from "@/components/TodaysDeal";






export default function Home() {
  return (
    <div
      className=" flex flex-col justify-center items-center"
    >
      <HomeHeroSec />
      <NewCollection />
      <Categories />
      <FeaturedProducts />
      <TodaysDeal />

    </div>


  );
}
