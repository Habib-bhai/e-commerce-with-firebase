'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Team member data
const teamMembers = [
  {
    name: "Anees Anees",
    role: "Development Manager",
    image: "/images/anees-pakora.jpeg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "MUNNA BHAI MBBS",
    role: "Marketing Expert",
    image: "/images/MunnaBhai.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Habib",
    role: "CEO",
    image: "/images/Habib.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "David Smith",
    role: "Digital Marketing Specialist",
    image: "/images/team-1.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Olive Doe",
    role: "Service Representative",
    image: "/images/team-2.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Davidthy Phillips",
    role: "Senior Developer",
    image: "/images/team-3.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
]

export function TeamCarousel() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary font-medium">Our Team</span>
            <span className="w-2 h-2 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Management Team
          </h2>
        </div>

        {/* Team Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-t-xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Social Icons Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Facebook className="h-5 w-5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Instagram className="h-5 w-5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <Twitter className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-12 h-12 w-12 bg-white border-none shadow-lg" />
          <CarouselNext className="hidden md:flex right-12 h-12 w-12 bg-white border-none shadow-lg" />
        </Carousel>
      </div>
    </section>
  )
}

