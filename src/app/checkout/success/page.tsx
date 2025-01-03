'use client'

import { useEffect, useState } from 'react'
import { useCart } from '@/app/context/CartContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Package, Truck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import confetti from 'canvas-confetti'

export default function CheckoutSuccessPage() {
  const { state, removeItem } = useCart()
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    // Generate a random order number
    setOrderNumber(Math.random().toString(36).substr(2, 9).toUpperCase())

    // Clear the cart
    // removeItem()

    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [removeItem])

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Order Placed Successfully!</CardTitle>
          <CardDescription>Thank you for your purchase. Your order has been received.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Order Number:</span>
              <span className="text-lg">{orderNumber}</span>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-semibold">Order Summary</h3>
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="relative h-10 w-10 rounded overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <span>{item.name} (x{item.quantity})</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between items-center font-semibold">
              <span>Total Amount:</span>
              <span className="text-lg">${state.total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="w-full space-y-2">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Package className="h-5 w-5" />
              <span>Your order is being processed</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Truck className="h-5 w-5" />
              <span>Estimated delivery: 3-5 business days</span>
            </div>
          </div>
          <Button asChild className="w-full">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
