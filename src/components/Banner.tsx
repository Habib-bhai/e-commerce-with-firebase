'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function AboutHeader() {
  const path = usePathname()
  return (
    <>
        <header className="relative min-h-[300px] md:min-h-[400px] overflow-hidden bg-[#f8f3ef]">
      

      {/* Content Container */}
      <div className="container mx-auto px-4 pt-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center ">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
              {/* <span className="text-gray-400">→</span> */}
              <span className="text-gray-600">{  path}</span>
            </nav>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
            >
              {path.slice(1)}
            </motion.h1>

            {/* Decorative Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-16 h-16"
            >
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-gray-300"
                strokeWidth="2"
                strokeDasharray="5 5"
              >
                <path d="M20 50C20 50 40 20 80 20M80 20C80 20 60 20 80 40" />
              </svg>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block relative"
          >
            <Image
              src="/images/banner.png"
              alt="Woman in pink outfit"
              width={400}
              height={500}
              className="object-cover"
              priority
            />
            {/* Decorative Sparkles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-8 top-8"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>
        
      </div>
      
     

    </header>
     <svg className='pt-20' id="wave" style={{transform: "rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 130" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(251, 248, 247, 1)" offset="0%"></stop><stop stop-color="rgba(251, 248, 247, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:1}} fill="#f8f3ef" d="M0,13L10,21.7C20,30,40,48,60,58.5C80,69,100,74,120,80.2C140,87,160,95,180,95.3C200,95,220,87,240,73.7C260,61,280,43,300,49.8C320,56,340,87,360,91C380,95,400,74,420,58.5C440,43,460,35,480,28.2C500,22,520,17,540,26C560,35,580,56,600,58.5C620,61,640,43,660,45.5C680,48,700,69,720,80.2C740,91,760,91,780,75.8C800,61,820,30,840,28.2C860,26,880,52,900,56.3C920,61,940,43,960,39C980,35,1000,43,1020,52C1040,61,1060,69,1080,69.3C1100,69,1120,61,1140,67.2C1160,74,1180,95,1200,106.2C1220,117,1240,117,1260,106.2C1280,95,1300,74,1320,65C1340,56,1360,61,1380,71.5C1400,82,1420,100,1430,108.3L1440,117L1440,130L1430,130C1420,130,1400,130,1380,130C1360,130,1340,130,1320,130C1300,130,1280,130,1260,130C1240,130,1220,130,1200,130C1180,130,1160,130,1140,130C1120,130,1100,130,1080,130C1060,130,1040,130,1020,130C1000,130,980,130,960,130C940,130,920,130,900,130C880,130,860,130,840,130C820,130,800,130,780,130C760,130,740,130,720,130C700,130,680,130,660,130C640,130,620,130,600,130C580,130,560,130,540,130C520,130,500,130,480,130C460,130,440,130,420,130C400,130,380,130,360,130C340,130,320,130,300,130C280,130,260,130,240,130C220,130,200,130,180,130C160,130,140,130,120,130C100,130,80,130,60,130C40,130,20,130,10,130L0,130Z"></path></svg>

     </>

  )
}

