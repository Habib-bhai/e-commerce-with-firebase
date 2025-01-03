'use client'

import {  X, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useWishlist } from '@/app/context/WishListContext' 
import { useCart } from '@/app/context/CartContext' 
import Image from 'next/image'
import { toast } from 'sonner'

export function Wishlist() {
  const { state, removeItem } = useWishlist()
  const { addItem } = useCart()

  const handleAddToCart = (item: { id: string; name: string; price: number; image: string }) => {
    addItem({ ...item, quantity: 1 })
    toast.success(`${item.name} added to cart`)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Image src={"/images/icons/heart.svg"} alt='search' height={20} width={20} 
          className='h-6 w-6'
          />
          {state.items.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {state.items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>My Wishlist</SheetTitle>
          
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-4 border-b">
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
                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingCart className="h-4 w-4" />
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
              Your wishlist is empty
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

