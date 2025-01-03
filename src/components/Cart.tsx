'use client'

import { ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useCart } from '@/app/context/CartContext' 
import Image from 'next/image'

export function Cart() {
  const { state, removeItem, updateQuantity } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Image src={"/images/icons/shopping-bag.svg"} alt='search' height={20} width={20} />
          {state.items.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {state.items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-scroll">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>My cart</SheetTitle>
          
        </SheetHeader>
        <div className="mt-8 space-y-4 ">
          {state.items.map((item) => (

            <div key={item.id} className="flex flex-wrap items-center gap-4 py-4 border-b">
              <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">1 × ${item.price.toFixed(2)}</p>
              </div>
              {/* Quantity */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                >
                  -
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          {state.items.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              Your cart is empty
            </div>
          )}
        </div>
        {state.items.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between font-medium">
              <span>Subtotal:</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            <Button className="w-full bg-black hover:bg-gray-800">
              Proceed to checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}