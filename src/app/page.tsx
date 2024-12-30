import Categories from "@/components/Categories";
import HomeHeroSec from "@/components/HomeHeroSec";
import NewCollection from "@/components/NewCollection";

import FeaturedProducts from "@/components/FeaturedProducts";
import TodaysDeal from "@/components/TodaysDeal";
import WeeklyDeals from "@/components/WeeklyDeals";
import AllProducts from "@/components/AllProducts";






export default function Home() {
  return (
    <div
      className=" flex flex-col justify-center items-center overflow-x-hidden"
    >
      <HomeHeroSec />
      <NewCollection />
      <Categories />
      <FeaturedProducts />
      <TodaysDeal />
      <WeeklyDeals />
      <AllProducts/>

    </div>


  );
}
