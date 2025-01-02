import ProductDetailsDynamicPageStructure from "@/components/ProductDetailsDynamicPageStructure"
import { client } from "@/sanity/lib/client"

async function getData(slug: string) {
  const result = await client.fetch(`
    *[_type == "product" && slug.current == "${slug}"][0] {
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

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const Data = await getData(params.slug)
  return (
    <ProductDetailsDynamicPageStructure SanityData={Data} />
  )
}

