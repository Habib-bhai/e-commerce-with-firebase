"use client"
import Image from "next/image";
import { Aoboshi_One } from 'next/font/google'
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';



const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})



export default function TodaysDeal() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 5,
      minutes: 9,
      seconds: 48
    });
  
    // Timer logic
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = { ...prevTime };
          if (newTime.seconds > 0) {
            newTime.seconds--;
          } else {
            newTime.seconds = 59;
            if (newTime.minutes > 0) {
              newTime.minutes--;
            } else {
              newTime.minutes = 59;
              if (newTime.hours > 0) {
                newTime.hours--;
              } else {
                newTime.hours = 23;
                if (newTime.days > 0) {
                  newTime.days--;
                }
              }
            }
          }
          return newTime;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    // Sample product data
    const products = [
      {
        id: 1,
        image: "/images/products/e-com-product-5.png",
        brand: "SOFOLI",
        title: "Cozy women knit sweater with pockets",
        rating: 4,
        price: 15.60,
        originalPrice: 34.00,
      },
      {
        id: 2,
        image: "/images/products/e-com-product-6.png",
        brand: "SOFOLI",
        title: "Cozy women knit sweater with pockets",
        rating: 4,
        price: 15.60,
        originalPrice: 34.00,
      },
      {
        id: 3,
        image: "/images/products/e-com-product-7.png",
        brand: "SOFOLI",
        title: "Cozy women knit sweater with pockets",
        rating: 4,
        price: 15.60,
        originalPrice: 34.00,
      },
      // Add more products as needed
    ];
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
    };

    return (
        <div className="flex flex-col w-screen justify-center items-center  ">

            {/* headings */}
            {/* <div className={`${aboshi.className} flex flex-col justify-center items-start`}>
                <div className="flex justify-center items-center gap-3">
                    <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
                    <p className="text-[#cc0d39]">Today&quot;s Deal</p>
                    <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
                </div>
                <h1 className=" text-3xl md:text-4xl">Hurry Up. offer in End</h1>
            </div> */}

            <div className='mt-10 mb-20'>
                <div className="w-screen overflow-x-hidden relative">

                    {/* Header with Today Deals and Navigation */}
                    <div className={`${aboshi.className} w-full  flex justify-between items-center mb-2 px-10`}>
                        <div className="flex items-center gap-2">
                            <span className="text-lg">✧</span>
                            <h2 className="text-red-500 text-lg font-medium">Today Deals</h2>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center transition-colors hover:bg-gray-50"
                            >
                                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center transition-colors hover:bg-gray-50"
                            >
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Main Title */}
                    <h1 className={`${aboshi.className} text-3xl md:text-4xl font-bold mb-16 pl-10`}>Hurry Up. Offer In End</h1>

                    {/* Carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="w-full flex-shrink-0 flex flex-col md:flex-row justify-center items-center"
                                >
                                    <div className="relative md:w-[320px] w-[236px] h-[283px] bg-white">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full rounded-xl"
                                            objectFit="contain"
                                            layout="fill"
                                        />
                                    </div>

                                    <div className="w-[236px] border-b border-l border-r md:w-[325px] md:h-[260px] p-6 lg:p-8 md:border-b md:border-r md:border-t border-gray-400 rounded-tr-xl rounded-br-xl">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="text-gray-600 font-medium text-sm">BRAND: {product.brand}</div>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 ${i < product.rating ? 'fill-red-500 text-red-500' : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                                            {product.title}
                                        </h2>

                                        <div className="flex justify-between mb-2">
                                            {[
                                                { value: timeLeft.days, label: 'day' },
                                                { value: timeLeft.hours, label: 'Hours' },
                                                { value: timeLeft.minutes, label: 'Min' },
                                                { value: timeLeft.seconds, label: 'Sec' }
                                            ].map((item, index) => (
                                                <div key={index} className="text-center">
                                                    <div className="text-2xl font-bold text-gray-800">
                                                        {String(item.value).padStart(2, '0')}
                                                    </div>
                                                    <div className="text-gray-600">{item.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-xl font-bold text-gray-800">
                                                ${product.price.toFixed(2)}
                                            </span>
                                            <span className="text-lg text-gray-500 line-through">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
