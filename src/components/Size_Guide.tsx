'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Ruler } from 'lucide-react'
import * as React from 'react';

export function SizeGuide() {
  const sizeChart = [
    { size: 'S', chest: '36-38"', waist: '28-30"', hips: '35-37"' },
    { size: 'M', chest: '38-40"', waist: '30-32"', hips: '37-39"' },
    { size: 'L', chest: '40-42"', waist: '32-34"', hips: '39-41"' },
    { size: 'XL', chest: '42-44"', waist: '34-36"', hips: '41-43"' },
    { size: '2XL', chest: '44-46"', waist: '36-38"', hips: '43-45"' },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Ruler className="w-4 h-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Size Guide</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="font-medium">Size</div>
          <div className="font-medium">Chest</div>
          <div className="font-medium">Waist</div>
          <div className="font-medium">Hips</div>
          {sizeChart.map((row) => (
            <React.Fragment key={row.size}>
              <div>{row.size}</div>
              <div>{row.chest}</div>
              <div>{row.waist}</div>
              <div>{row.hips}</div>
            </React.Fragment>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

