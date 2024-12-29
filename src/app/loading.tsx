import React from 'react'
import { ArrowLeftRight, Package, ShoppingCart } from 'lucide-react';

export default function loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
          <div className="w-32 h-32 rounded-full border-4 border-transparent border-t-purple-500 border-r-blue-500" />
        </div>
        
        {/* Middle pulsing circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
        </div>

        {/* Loading text in center */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Loading...
          </p>
        </div>

        {/* Orbiting icons container */}
        <div className="relative w-32 h-32 animate-[spin_8s_linear_infinite]">
          {/* Shopping cart icon - spins while orbiting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-[spin_2s_linear_infinite]">
              <ShoppingCart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          
          {/* Package icon - spins counter-clockwise while orbiting */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="animate-[spin_2s_linear_infinite_reverse]">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          
          {/* Left arrow icon - spins while orbiting */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-[spin_3s_linear_infinite]">
              <ArrowLeftRight className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          
          {/* Right arrow icon - spins counter-clockwise while orbiting */}
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
            <div className="animate-[spin_3s_linear_infinite_reverse]">
              <ArrowLeftRight className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Bouncing dots */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
