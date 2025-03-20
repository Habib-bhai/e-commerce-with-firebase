"use client"
import ShopStructure from "@/components/ShopStructure"
// import { client } from "@/sanity/lib/client"
import Banner from '@/components/Banner'
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"





interface Product {
  name: string;
  image: string[];
  productSlug: string;
  description: string;
  newProduct: boolean;
  premiumProduct: boolean;
  sizes: string[];
  category: string;
  reviews: number;
  price: number;
  quantity: number;
  color: string;
  tags: string[];
  Brand: string;
}

export default function ShopPage() {
  // const { user } = useAuthContext();
  // const router = useRouter();
  const [Data, setData] = useState<Product[]>([])
  const [UserSession, setUserSession] = useState<string | null>("")
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserSession(sessionStorage.getItem("user"));
    }
  }, []);


  useEffect(() => {

    async function getAllProducts() {
      try {
        const productsCollectionRef = collection(db, "products");
        const querySnapshot = await getDocs(productsCollectionRef);


        // Map the documents to the Product type
        const products: Product[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          // Type assertion to ensure the data matches the Product type
          return {
            name: data.name || "",
            image: data.image || [],
            productSlug: data.productSlug || "",
            description: data.description || "",
            newProduct: data.newProduct || false,
            premiumProduct: data.premiumProduct || false,
            sizes: data.sizes || [],
            category: data.category || "",
            reviews: data.reviews || 0,
            price: data.price || 0,
            quantity: data.quantity || 0,
            color: data.color || "",
            tags: data.tags || [],
            Brand: data.Brand || "",
          } as Product;
        });

        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array in case of error
      }
    }

    getAllProducts()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("One", user, UserSession, "Two")
    if (user == null && !UserSession) router.push("/sign-in")
          // eslint-disable-next-line
  }, [user])


  return (
    <>
      <Banner />
      <ShopStructure sanityData={Data} />
    </>
  )
}
