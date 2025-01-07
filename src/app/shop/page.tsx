import ShopStructure from "@/components/ShopStructure"
import { client } from "@/sanity/lib/client"
import Banner from '@/components/Banner'


export interface SanityData {
  name: string
  price: number
  slug: {current: string},
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
  sizes: string[]
  brand: string
  category: string
  color: string
}


async function getData() {
  const result = await client.fetch(`
     *[_type == "product" ]{
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
      color
    }
  `)
  return result
}


export const revalidate = 60

export default async function ShopPage() {
  
  

  const Data: SanityData[] = await getData()

  return (
    <>
    <Banner />
    <ShopStructure sanityData={Data} />
    </>
  )
}
