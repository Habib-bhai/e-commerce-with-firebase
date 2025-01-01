"use client"

import { useEffect, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ProductCard"
import { SlidersHorizontal } from 'lucide-react'
import { client } from "@/sanity/lib/client"

interface Product {
  id: string
  name: string
  imgSrc: string
  Price: number
  discountedPrice?: number
  description: string
  premium?: boolean
  newProduct?: boolean
  reviews: number
  slug: { current: string }
  category: string
  size?: string[]
  tags?: string[]
}

export default function ShopPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [data, setData] = useState<{
    _type: 'image',
    asset: {
      _ref: string;
      _type: 'reference';
    },
    key: string
  
  }[]>()

  const categories = [
    { name: "Women's Clothing", count: 45 },
    { name: "Men's Clothing", count: 32 },
    { name: "Casual", count: 21 },
    { name: "Accessories", count: 8 },
    { name: "Maternity Wear", count: 37 },
  ]

  const sizes = ["XS", "S", "M", "L", "XL"]
  const tags = ["New Arrival", "Sale", "Popular", "Premium"]

  const products: Product[] = [
    {
      id: "1",
      name: "Classic Leather Jacket",
      imgSrc: "https://picsum.photos/seed/product1/300/200",
      Price: 199.99,
      description: "Premium leather jacket with modern styling",
      reviews: 45,
      slug: { current: "classic-leather-jacket" },
      category: "Men's Clothing",
      size: ["M", "L", "XL"],
      tags: ["Premium"]
    },
    {
      id: "2",
      name: "Floral Summer Dress",
      imgSrc: "https://picsum.photos/seed/product2/300/200",
      Price: 79.99,
      discountedPrice: 59.99,
      description: "Light and breezy floral dress perfect for summer",
      reviews: 32,
      slug: { current: "floral-summer-dress" },
      category: "Women's Clothing",
      size: ["S", "M", "L"],
      tags: ["New Arrival", "Sale"]
    },
    {
      id: "3",
      name: "Casual Denim Jeans",
      imgSrc: "https://picsum.photos/seed/product3/300/200",
      Price: 89.99,
      description: "Comfortable and stylish denim jeans for everyday wear",
      reviews: 58,
      slug: { current: "casual-denim-jeans" },
      category: "Casual",
      size: ["S", "M", "L", "XL"],
      tags: ["Popular"]
    },
  ]

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }



  async function getData(slug: string) {
      const result = await client.fetch(`
        *[_type == "product" ][0] {
          
          image,
          
        }
      `)
      setData(result)
    }

     useEffect(() => {
        
          getData("hello")
        
      }, [])
  

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="outline"
        className="flex items-center gap-2 mb-4 lg:hidden"
        onClick={() => setShowFilters(!showFilters)}
      >
        <SlidersHorizontal className="h-4 w-4" />
        {showFilters ? "Hide Filters" : "Show Filters"}
      </Button>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Product Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.name} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCategories.includes(category.name)}
                      onCheckedChange={() => toggleCategory(category.name)}
                    />
                    <span className="text-sm">{category.name}</span>
                    <span className="text-sm text-muted-foreground ml-auto">({category.count})</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Price Filter</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSizes.includes(size) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <label key={tag} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => toggleTag(tag)}
                    />
                    <span className="text-sm">{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                imgSrc={data ? data : null}
                Price={product.Price}
                discountedPrice={product.discountedPrice}
                descrition={product.description}
                reviews={product.reviews}
                slug={product.slug}
                premium={product.tags?.includes("Premium")}
                newProduct={product.tags?.includes("New Arrival")}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
