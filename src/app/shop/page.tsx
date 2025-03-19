"use client"
import ShopStructure from "@/components/ShopStructure"
// import { client } from "@/sanity/lib/client"
import Banner from '@/components/Banner'
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


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

export default function ShopPage() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [UserSession, setUserSession] = useState<string | null>("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserSession(sessionStorage.getItem("user"));
    }
  }, []);


  useEffect(() => {
    console.log("User:", user);
    console.log("UserSession:", UserSession);

    if (user == null && !UserSession) {
      router.push("/sign-up");
    }
    
  }, [user, UserSession]);


  // const Data: SanityData[] = await getData()


  // if (!user && !UserSession){
  //   router.push('/sign-up')
  // }
  return (
    <>
      <Banner />
      <ShopStructure sanityData={[]} />
    </>
  )
}
