import React from 'react'
// import { client } from '@/sanity/lib/client'
import AllProductsUI from './AllProductsUI';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/app/firebase/config';  // Assuming you've initialized your Firestore instance

 interface Product {
    name: string;
    image: string[]; // Array of image URLs
    productSlug: string;
    description: string;
    newProduct: boolean; // true for some products and false for others
    premiumProduct: boolean; // true for some products and false for others
    sizes: string[]; // Array of strings representing different sizes
    category: string;
    reviews: number;
    price: number;
    quantity: number;
    color: string;
    tags: string[];
    Brand: string;
  }
  
  // Fetch all products with type safety
  async function getAllProducts(): Promise<Product[]> {
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
  
      console.log("Products:", products);
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of error
    }
  }





export default async function AllProducts() {

    const Data: Product[]  = await getAllProducts()
    
    return (
        <AllProductsUI data={Data} />
    )
}
