"use client"

import React, { useEffect } from 'react'
import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ProductCard"
import { SlidersHorizontal } from 'lucide-react'
import { SanityData } from '@/app/shop/page'


export default function ShopStructure({ sanityData }: { sanityData: SanityData[] }) {

  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])

  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [data] = useState<SanityData[]>(sanityData)

  const [filteredData, setFilteredData] = useState<SanityData[]>(data);


  const categories = [
    { name: "Women's Clothing", count: 45 },
    { name: "Men's Clothing", count: 32 },
    { name: "Casual", count: 21 },
    { name: "Accessories", count: 8 },
    { name: "Maternity Wear", count: 37 },
  ]

  const sizes = ["XS", "S", "M", "L", "XL"]
  const tags = ["New Arrival", "Sale", "Popular", "Premium", "Men Hoodies", "Women Hoodies", "denim", "shirts"]


  const toggleCategory = (category: string) => {
    setSelectedCategories((prev: string[]) =>
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


  useEffect(() => {
    const filtered = data.filter(product => {
      // Convert category strings to lowercase
      const productCategory = product.category?.toLowerCase();
      const selectedCats = selectedCategories.map(c => c.toLowerCase());

      if (selectedCategories.length && !selectedCats.includes(productCategory)) {
        return false;
      }

      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Convert size strings to lowercase
      const productSizes = product.sizes?.map(s => s.toLowerCase());
      const selectedSizesLower = selectedSizes.map(s => s.toLowerCase());

      if (selectedSizes.length && !productSizes?.some(size =>
        selectedSizesLower.includes(size))) {
        return false;
      }

      // Convert tags to lowercase
      const productTags = product.tags?.map(t => t.toLowerCase());
      const selectedTagsLower = selectedTags.map(t => t.toLowerCase());

      if (selectedTags.length && !selectedTagsLower.some(tag =>
        productTags?.includes(tag))) {
        return false;
      }

      return true;
    });

    setFilteredData(filtered);
  }, [data, selectedCategories, priceRange, selectedSizes, selectedTags]);



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

                {
                  categories.map((category) => (
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
                  defaultValue={[0, 400]}
                  max={400}
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* {data.map((product:SanityData, index) => (
              <ProductCard
                key={index}
                name={product.name}
                imgSrc={product.image}
                Price={product.price}
                descrition={product.description}
                reviews={product.reviews}
                slug={product.slug}
                premium={product.tags?.includes("Premium")}
                newProduct={product.tags?.includes("New Arrival")}
              />
            ))} */}
            {filteredData.map((product: SanityData, index) => (
              <ProductCard
                key={index}
                name={product.name}
                imgSrc={product.image}
                Price={product.price}
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
