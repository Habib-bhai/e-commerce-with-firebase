'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Aoboshi_One } from 'next/font/google'
import Image from 'next/image'


const aboshi = Aoboshi_One({
    subsets: ['latin'],
    weight: ['400']
})



export default function DealOfWeek() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 3,
        minutes: 2,
        seconds: 29
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
                    clearInterval(timer)
                    return prev
                }

                let newSeconds = prev.seconds - 1
                let newMinutes = prev.minutes
                let newHours = prev.hours
                let newDays = prev.days

                if (newSeconds < 0) {
                    newSeconds = 59
                    newMinutes -= 1
                }
                if (newMinutes < 0) {
                    newMinutes = 59
                    newHours -= 1
                }
                if (newHours < 0) {
                    newHours = 23
                    newDays -= 1
                }

                return {
                    days: newDays,
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className={`${aboshi.className} bg-[#FFF5F3] py-12 md:py-16`}>
            <div className=" w-screen overflow-x-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2  pl-4 md:pl-10">
                            <p className="text-red-600 font-medium flex items-center gap-2">
                                <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                                Deal of the Week
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
                                UP TO 80% OFF
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Don&apos;t miss out on our biggest sale! Enjoy up to 80% off on a wide range of products.
                            </p>
                        </div>

                        <div className="space-y-4 pl-4 md:pl-10">
                            <p className="text-red-600 font-medium">Hurry Up! Offer ends in.</p>
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <span className="text-4xl font-bold block">{timeLeft.days}</span>
                                    <span className="text-sm text-gray-600">day</span>
                                </div>
                                <div className="text-red-600 text-2xl font-bold self-start">*</div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold block">{timeLeft.hours}</span>
                                    <span className="text-sm text-gray-600">Hours</span>
                                </div>
                                <div className="text-red-600 text-2xl font-bold self-start">*</div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold block">{timeLeft.minutes}</span>
                                    <span className="text-sm text-gray-600">Min</span>
                                </div>
                                <div className="text-red-600 text-2xl font-bold self-start">*</div>
                                <div className="text-center">
                                    <span className="text-4xl font-bold block">{timeLeft.seconds}</span>
                                    <span className="text-sm text-gray-600">Sec</span>
                                </div>
                            </div>
                        </div>

                        <Button className="ml-4 md:pl-10 bg-black hover:bg-navy-800 text-white px-8 py-6 rounded-full text-lg transition-colors duration-300 ease-in-out hover:bg-[#dc2626]">
                            Shop Now
                        </Button>
                    </div>

                    <div className="w-full flex justify-center items-center flex-wrap md:grid place-content-center place-items-start  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  overflow-x-hidden gap-5 lg:gap-56 overflow-hidden">

                        <div className="group md:col-span-1 relative h-[250px] w-[250px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/featured/e-com-feature-product-5.png"
                                objectFit="cover"
                                layout="fill"
                                alt="Fashion model in white t-shirt"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 text-white">
                                <h3 className="text-lg font-semibold">Women&apos;s White Collection</h3>
                                <p className="text-sm">Elegant & Comfortable</p>
                            </div>
                        </div>

                        <div className="group  md:col-span-1 relative h-[250px] w-[250px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/featured/e-com-feature-product-6.png"
                                layout='fill'
                                objectFit='cover'
                                alt="Fashion model in yellow suit"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 text-white">
                                <h3 className="text-lg font-semibold">Women&apos;s White Collection</h3>
                                <p className="text-sm">Elegant & Comfortable</p>
                            </div>
                        </div>
                        <div className="group md:col-span-1 relative h-[250px] w-[250px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/featured/e-com-feature-product-7.png"
                                layout='fill'
                                objectFit='cover'
                                alt="Fashion model in red outfit"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 text-white">
                                <h3 className="text-lg font-semibold">Women&apos;s White Collection</h3>
                                <p className="text-sm">Elegant & Comfortable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
