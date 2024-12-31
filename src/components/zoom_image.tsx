'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ZoomImageProps {
  src: string
  alt: string
}

export function ZoomImage({ src, alt }: ZoomImageProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showZoom, setShowZoom] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPosition({ x, y })
  }

  return (
    <div 
      className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-200"
        style={{
          transform: showZoom ? 'scale(1.5)' : 'scale(1)',
          transformOrigin: `${position.x}% ${position.y}%`
        }}
        priority
      />
    </div>
  )
}

