import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'
import { Aoboshi_One } from 'next/font/google'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/app/firebase/config'
// import { client } from '@/sanity/lib/client'



const aboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})


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

        return  products;
      } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array in case of error
      }
    }


export const revalidate = 60

export default async function FeaturedProducts() {

  const Data: Product[] = await getAllProducts()
  
  
  return (
    <div className="bg-[#fffaf3] w-screen pt-10 pb-20 flex flex-col justify-center items-center ">

    {/* hedings */}
    <div className={`${aboshi.className}  mb-14 flex flex-col justify-center items-center`}>
      <div className="flex justify-center items-center gap-3">
        <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
        <p className="text-[#cc0d39]">Feature Products
        </p>
        <Image src={"/images/icons/star-shine.svg"} alt="start" height={15} width={15} />
      </div>
      <h1 className=" text-3xl md:text-4xl">Our Features Collection</h1>
    </div>

    {/* Cards */}
    <div className="w-full flex justify-evenly items-center flex-wrap">

      {
        Data.map((item: Product) => (
          <ProductCard slug={item.productSlug} key={item.productSlug} Price={item.price}  descrition={item.description} newProduct={item.newProduct} premium={item.premiumProduct} name={item.name} reviews={item.reviews} imgSrc={item.image[0]}   />
        ))
      }
    </div>

  </div>
  )
}
