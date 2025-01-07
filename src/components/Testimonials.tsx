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
import { Star } from 'lucide-react'

// Testimonial data
const testimonials = [
  {
    content: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float.",
    author: "Rhodes Jhon",
    image: "/images/anees-pakora.jpeg",
    rating: 5,
  },
  {
    content: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float.",
    author: "Rhodes Jhon",
    image: "/images/MunnaBhai.jpg",
    rating: 5,
  },
  {
    content: "This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float.",
    author: "Rhodes Jhon",
    image: "/images/team-2.jpg",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say<br />About Us
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 rounded-3xl">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Testimonial Content */}
                      <p className="text-gray-600 leading-relaxed relative">
                        {testimonial.content}
                        <span className="absolute -right-2 -top-2 text-6xl text-orange-400 opacity-20">
                          &ldquo;
                        </span>
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{testimonial.author}</h3>
                            <div className="flex gap-0.5">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-red-500 text-red-500"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-6xl text-orange-400 opacity-20 leading-none">
                          &rdquo;
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-12 h-12 w-12 bg-white border-none shadow-lg hover:bg-gray-100  shadow-black z-20" />
            <CarouselNext className="right-12 h-12 w-12 bg-white border-none shadow-lg hover:bg-gray-100  shadow-black z-20" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

