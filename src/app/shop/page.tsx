"use client"
import ShopStructure from "@/components/ShopStructure"
// import { client } from "@/sanity/lib/client"
import Banner from '@/components/Banner'
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export interface SanityData {
  name: string
  price: number
  slug: { current: string },
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

export default  function ShopPage() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!router || typeof user === "undefined") return; // Ensure router is ready and user is defined
    if (user == null) router.push("/sign-up");
  }, [user, router]);

  // const Data: SanityData[] = await getData()

  return (
    <>
      <Banner />
      <ShopStructure sanityData={[]} />
    </>
  )
}
