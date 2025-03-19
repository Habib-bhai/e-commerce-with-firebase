import ProductDetailsDynamicPageStructure from "@/components/ProductDetailsDynamicPageStructure"




export interface fetchedData {
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
  sizes: string[]
  brand: string
  category: string
  color: string
}


// const query = groq`
//     *[_type == "product" && slug.current == $slug][0] {
//       name,
//       price,
//       slug,
//       image,
//       newProduct,
//       premiumProduct,
//       reviews,
//       description,
//       tags,
//       quantity,
//       sizes,
//       brand,
//       category,
//       color
//     }
//   `


// async function getData(slug: string) {


//   // const result = await client.fetch(query, { slug }, {
//   //   cache: "force-cache",
//   //   next: {revalidate: 500}
//   // })
//   return result

// }

// { params }: { params: { slug: string } }
export default async function ProductDetail() {
  // const Data = await getData(params.slug)
  return (
    <>
      <ProductDetailsDynamicPageStructure SanityData={{
        name: "string",
        price: 2030,
        slug: "string",
        image: [{
          _type: 'image',
          asset: {
            _ref: "string",
            _type: 'reference'
          },
          key: "string"
        }],
        newProduct: true,
        premiumProduct: true,
        reviews: 20,
        description: "string",
        tags: [""],
        quantity: 10,
        sizes: ["h"],
        brand: "string",
        category: "string",
        color: "string"
      }} />
    </>
  )
}

