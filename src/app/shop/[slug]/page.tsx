'use client'
import { useState, useEffect } from 'react'
import { Heart, Share2, Minus, Plus, ShoppingCart, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ZoomImage } from '@/components/zoom_image'
import { SizeGuide } from '@/components/Size_Guide'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

// Keep existing interfaces but update fetchedData
interface ProductImage {
  src: string
  alt: string
}

interface ColorOption {
  id: string
  name: string
  class: string
  price: number
  stock: number
}

interface SizeOption {
  id: string
  label: string
  price: number
  stock: number
}

interface fetchedData {
  name: string
  price: number
  slug: string
  image: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    key: string
  }[]
  newProduct: boolean
  premiumProduct: boolean
  reviews: number
  description: string
  tags: string[]
  quantity: number
  sizes: []
  brand: string
  category: string
  color: string
}

// Keep existing color and size options
const colors: ColorOption[] = [
  { id: 'purple', name: 'Royal Purple', class: 'bg-purple-500', price: 40, stock: 5 },
  { id: 'yellow', name: 'Sunshine Yellow', class: 'bg-yellow-400', price: 45, stock: 3 },
  { id: 'pink', name: 'Hot Pink', class: 'bg-pink-500', price: 42, stock: 0 },
  { id: 'rose', name: 'Rose Pink', class: 'bg-rose-300', price: 40, stock: 8 },
]

const sizes: SizeOption[] = [
  { id: 'S', label: 'S', price: 0, stock: 10 },
  { id: 'M', label: 'M', price: 0, stock: 15 },
  { id: 'L', label: 'L', price: 2, stock: 8 },
  { id: 'XL', label: 'XL', price: 4, stock: 6 },
  { id: '2XL', label: '2XL', price: 5, stock: 4 },
]

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colors[0])
  const [selectedSize, setSelectedSize] = useState<SizeOption>(sizes[1])
  const [quantity, setQuantity] = useState(1)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [data, setData] = useState<fetchedData>()

  // Update basePrice to use fetched data price
  const basePrice = data?.price || 40
  const finalPrice = basePrice + selectedColor.price + selectedSize.price

  const handleAddToCart = () => {
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
  }

  useEffect(() => {
    setQuantity(1)
  }, [selectedColor, selectedSize])

  async function getData(slug: string) {
    const result = await client.fetch(`
      *[_type == "product" && slug.current == "${slug}"][0] {
        name,
        price,
        slug,
        image,
        newProduct,
        premiumProduct,
        reviews,
        description,
        tags,
         quantity,
        sizes,
        brand,
      category,
        color,
      }
    `)
    setData(result)
  }

  useEffect(() => {
    if (params.slug) {
      getData(params.slug)
    }
  }, [params.slug])
  console.log(data)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <ZoomImage
              src={data?.image && data.image[selectedImage] ? urlFor(data.image[selectedImage]).url() : ""}
              alt={`Product image ${selectedImage + 1}`}
            />
            <div className="grid grid-cols-4 gap-4">
              {data?.image?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-200 
                    ${selectedImage === index
                      ? 'ring-2 ring-primary scale-95 opacity-100'
                      : 'hover:scale-95 opacity-60 hover:opacity-100'}`}
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={`Product view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                {data?.newProduct && (
                  <Badge variant="destructive" className="text-sm">New Product</Badge>
                )}
                {selectedColor.stock < 5 && selectedColor.stock > 0 && (
                  <Badge variant="secondary" className="text-sm">
                    Only {selectedColor.stock} left
                  </Badge>
                )}
                {data?.premiumProduct && (
                  <Badge variant="secondary" className="text-sm">Premium Product</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                {data?.name || 'Loading...'}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">({data?.reviews || 0} Reviews)</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {data?.description || 'Loading description...'}
            </p>

            {/* Rest of the component remains the same */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={finalPrice}
              >
                <span className="text-4xl font-bold">${finalPrice.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through">${(finalPrice * 1.7).toFixed(2)}</span>
              </motion.div>

              {/* Color Selection */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Color: {selectedColor.name}</span>
                  {selectedColor.price > 0 && (
                    <span className="text-sm text-gray-500">+${selectedColor.price}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      disabled={color.stock === 0}
                      className={`w-12 h-12 rounded-xl transition-all duration-200 relative
                        ${color.stock === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}
                        ${selectedColor.id === color.id ? 'ring-2 ring-offset-2 ring-primary scale-110' : ''}`}
                    >
                      <span className={`absolute inset-0 rounded-xl ${color.class}`} />
                      {color.stock === 0 && (
                        <span className="absolute inset-0 rounded-xl bg-gray-950/20 flex items-center justify-center text-white text-xs">
                          Sold
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Size</span>
                  <SizeGuide />
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <Button
                      key={size.id}
                      variant={selectedSize.id === size.id ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      disabled={size.stock === 0}
                      className={`min-w-[3rem] relative ${size.stock === 0 ? 'opacity-50' : ''
                        }`}
                    >
                      {size.label}
                      {size.price > 0 && (
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-1 rounded">
                          +${size.price}
                        </span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <button
                    onClick={() => quantity > 1 && setQuantity(q => q - 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => quantity < selectedColor.stock && setQuantity(q => q + 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    disabled={quantity >= selectedColor.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  className="flex-1 h-12 rounded-xl relative overflow-hidden"
                  onClick={handleAddToCart}
                  disabled={selectedColor.stock === 0}
                >
                  <AnimatePresence>
                    {isAddedToCart ? (
                      <motion.div
                        key="added"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Added to Cart
                      </motion.div>
                    ) : (
                      <motion.div
                        key="add"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-xl"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-red-500 stroke-red-500' : ''
                      }`}
                  />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-xl"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-2 pt-4 border-t">
              <div className="flex space-x-2 text-sm">
                <span className="font-medium">SKU:</span>
                <span className="text-gray-600 dark:text-gray-300">KE-91039</span>
              </div>
              <div className="flex space-x-2 text-sm">
                <span className="font-medium">Category:</span>
                <span className="text-gray-600 dark:text-gray-300">Women Cloths</span>
              </div>
              <div className="flex space-x-2 text-sm">
                <span className="font-medium">Tags:</span>
                <span className="text-gray-600 dark:text-gray-300">Bags, Cloths, Dress</span>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Badge variant="secondary" className="text-sm h-12 px-6">
                ⚡ Free Shipping
              </Badge>
              <Badge variant="secondary" className="text-sm h-12 px-6">
                🔄 Easy Returns
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}