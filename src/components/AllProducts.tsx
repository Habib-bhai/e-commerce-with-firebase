
import React from 'react'
import { client } from '@/sanity/lib/client'
import AllProductsUI from './AllProductsUI';

export interface fetchProduct {
    name: string,
    price: number,
    slug: { current: string },
    image: {
        _type: 'image',
        asset: {
            _ref: string;
            _type: 'reference';
        },
        key: string

    }[],
    newProduct: boolean,
    premiumProduct: boolean,
    reviews: number,
    description: string,
    tags: string[]
}



async function getData() {
    const data = await client.fetch(`
    *[_type == "product"  ][6...12] {
  name,
  price,
    slug,
    image,
    newProduct,
    premiumProduct,
    reviews,
    description,
    tags
}
    `)

    return data
}

export const revalidate = 60



export default async function AllProducts() {

    const Data: fetchProduct[] = await getData()

    return (
        <AllProductsUI data={Data} />
    )
}
