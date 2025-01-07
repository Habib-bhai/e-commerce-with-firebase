'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { TeamCarousel } from '@/components/Team-Carousel'
import { Testimonials } from '@/components/Testimonials'
import Banner from "@/components/Banner"

export default function AboutUs() {
  return (
    <>
    <Banner />

    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Images and Experience */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Background decorative elements */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-[15%] top-[20%] text-orange-400 z-30"
          >
            <Star className="w-12 h-12 fill-orange-400" />
          </motion.div>

          {/* Main image container */}
          <div className="relative w-full max-w-[400px] aspect-[3/4]">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 h-full"
            >
              <Image
                src="/images/fashion-model.jpg"
                alt="Fashion model in beige coat"
                fill
                className="rounded-2xl shadow-xl object-cover"
              />
            </motion.div>

            {/* Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-20 top-1/4 w-64 aspect-[4/5] z-20 hidden md:block"
            >
              <Image
                src="/images/fashion-model2.jpg"
                alt="Fashion model with red accessories"
                fill
                className="rounded-2xl shadow-xl object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 z-30"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-primary">25</div>
                <div className="text-sm font-medium leading-tight">
                  Year&lsquo;s
                  <br />
                  Experience
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-primary font-medium inline-block">About us</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Online Shopping Is Buying Things From Stores On The Internet.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the our majority have
              suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look
              even slightly believable you are going to.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 flex-1"
            >
              {[
                'We are provide 100% best products',
                'Flexible and affordable price',
                'All products is imported'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Small Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 w-full md:w-1/3"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/happy-customer.png"
                  alt="Happy customers"
                  fill
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/happy-customer2.png"
                  alt="Team members"
                  fill
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
            </motion.div>
          </div>
          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between mt-12"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/myImg.jpeg"
                  alt="CEO"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Thomas Alison</h3>
                <p className="text-sm text-gray-600">CEO at FASHION-BRO</p>
              </div>
            </div>
            <div className="relative md:w-60 h-10">
              <Image
                src="/images/signature.png"
                alt="Signature"
                fill
                className="opacity-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    <TeamCarousel />
    <Testimonials />
    </>
  )
}

