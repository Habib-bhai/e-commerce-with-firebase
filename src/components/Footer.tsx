"use client"
import Image from 'next/image';
import React, { FormEvent } from 'react'
import { Aoboshi_One } from 'next/font/google';
import CompanyAssurances from './CompanyAssurances';
import "@/app/globals.css";

const aoboshiOne = Aoboshi_One({
  subsets: ["latin"],
  weight: ['400']
})

export default function Footer() {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

  };

  return (
    <div className='overflow-x-hidden w-screen'>


      {/* newsletter */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full  p-6 bg-[#f9f3f0]">
        {/* Left div - Content */}

        <div className={`${aoboshiOne.className} w-full lg:w-1/2 space-y-6 `}>

          <div className='flex gap-3'>
            <Image src={"/images/icons/star-shine.svg"} width={15} height={15} alt={"star"} />
            <span className={`text-rose-500 font-medium ${aoboshiOne.className}`}>Our Blogs</span>
          </div>

          <h2 className="relative tracking-widest text-3xl md:text-4xl font-bold text-navy-900 leading-tight pb-2">

            Subscribe Newsletter

            <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-500"></span>

            <br />
            To & Get Every Day
            <br />
            Discount
          </h2>

          <form onSubmit={handleSubmit} className="w-full">
            <div className='flex w-full flex-col md:flex-row justify-between px-4 py-3 rounded-full  md:border border-gray-400 focus:outline-none focus:border-rose-500 gap-10'>

              <input
                type="email"
                placeholder="Write your Email Address"
                className="outline-none flex-1 bg-transparent  px-4 md:px-0 py-5 md:py-0 rounded-full  border md:border-none border-gray-400 focus:outline-none focus:border-rose-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-red-800 text-white rounded-full hover:bg-navy-800 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Right div - Image */}
        <div className="w-full lg:w-1/2">
          <div className="bg-rose-100 rounded-lg">
            <Image
              src="/images/e-com-newsletter-2.jpg"
              alt="Shopping woman with bags"
              className="w-full h-full object-cover rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* company assurances */}
      <div className='bg-[#fffaf3] pt-14 pb-32 flex justify-center items-center flex-wrap md:flex-nowrap '>

        <CompanyAssurances icon='shipping-fast.svg' title='Free Shipping' description='You get your items delivered without any extra cost.' />

        <CompanyAssurances icon='mic.svg' title='Great Support 24/7' description='Our customer support team is available around the clock' />

        <CompanyAssurances icon='handshake.svg' title='Return Available' description='Making it easy to return any items if you&quot;re not satisfied.' />

        <CompanyAssurances icon='sack-of-money.svg' title='Secure Payment' description='Shop with confidence knowing that our secure payment' />



      </div>


      {/* Footer part */}
      <footer className=" relative bg-[#f9f3f0] pt-16 pb-12">
        {/* top Curvature */}
        <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
          <svg id="wave" style={{
            transform: 'rotate(0deg)',
            transition: '0.3s'
          }} viewBox="0 0 1440 110" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="#f9f3f0" d="M0,88L10,86.2C20,84,40,81,60,67.8C80,55,100,33,120,34.8C140,37,160,62,180,69.7C200,77,220,66,240,53.2C260,40,280,26,300,18.3C320,11,340,11,360,16.5C380,22,400,33,420,34.8C440,37,460,29,480,27.5C500,26,520,29,540,31.2C560,33,580,33,600,40.3C620,48,640,62,660,71.5C680,81,700,84,720,71.5C740,59,760,29,780,16.5C800,4,820,7,840,9.2C860,11,880,11,900,25.7C920,40,940,70,960,69.7C980,70,1000,40,1020,23.8C1040,7,1060,4,1080,9.2C1100,15,1120,29,1140,45.8C1160,62,1180,81,1200,78.8C1220,77,1240,55,1260,45.8C1280,37,1300,40,1320,49.5C1340,59,1360,73,1380,75.2C1400,77,1420,66,1430,60.5L1440,55L1440,110L1430,110C1420,110,1400,110,1380,110C1360,110,1340,110,1320,110C1300,110,1280,110,1260,110C1240,110,1220,110,1200,110C1180,110,1160,110,1140,110C1120,110,1100,110,1080,110C1060,110,1040,110,1020,110C1000,110,980,110,960,110C940,110,920,110,900,110C880,110,860,110,840,110C820,110,800,110,780,110C760,110,740,110,720,110C700,110,680,110,660,110C640,110,620,110,600,110C580,110,560,110,540,110C520,110,500,110,480,110C460,110,440,110,420,110C400,110,380,110,360,110C340,110,320,110,300,110C280,110,260,110,240,110C220,110,200,110,180,110C160,110,140,110,120,110C100,110,80,110,60,110C40,110,20,110,10,110L0,110Z"></path></svg>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <Image
                src="/images/logos/logo-removebg.png"
                alt="Pesco Logo"
                height={100} 
                width={100}
              />
              <p className="text-gray-600">
                Fashion-Bro is an exciting International brand we provide high quality cloths
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image src={"/images/icons/mail.svg"} alt='mail' height={20} 
                  width={20}/>
                  <span className="text-gray-600">info@mydomain.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={"/images/icons/telephone-receiver.svg"} alt='phone' height={20} 
                  width={20}/>
                  <span className="text-gray-600">+94 123 4567 894</span>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-600">Find Us:</span>
                <div className="flex gap-3">
                  <Image src={"/images/icons/facebook.svg"} alt='facebook' height={30} width={30}/>
                  <Image src={"/images/icons/instagram.svg"} alt='instagram' height={30} width={30}/>
                  <Image src={"/images/icons/linkedin-161.svg"} alt='linkedin' height={20} width={20}/>
                  <Image src={"/images/icons/twitter.png"} width={20} height={20} alt={"twitter"} className='object-contain' />

                </div>
              </div>
            </div>

            {/* Customer Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Customer Services</h3>
              <ul className="space-y-4">
                {['Collections & Delivery', 'Returns & Refunds', 'Terms & Conditions', 'Delivery Return', 'Store Locations'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
                      <span className="text-orange-500">✻</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact', 'Login / Register'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
                      <span className="text-orange-500">✻</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
          </div>
        </div>
      </footer>


    </div>
  )
}
