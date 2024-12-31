import { defineField, defineType } from "sanity";

export const Products = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),

        defineField({
            name:"image",
            type: "array",
            of: [{type: "image"}]
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',    
            title: 'Description',
            type: 'text',
        }),

        defineField({
            name: "newProduct",
            type: "boolean"
        }),

        defineField({
            name: "premiumProduct",
            type: "boolean"
        }),
        defineField({
            name: "sizes",
            type: "array",
            of: [{type: "string"}]
        }),
        defineField({
            name:"category",
            type: "string"
        }),
        defineField({
            name: "reviews",
            type: "number"
        }),

        defineField({
            name: "price",
            type: "number"
        }),
        defineField({
            name: "quantity",
            type: "number"
        }),
        defineField({
            name: "color",
            type: "string"
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [{type: "string"}]
        }),
        defineField( {
            name: "brand",
            type: "string"
        })



    ],         
})