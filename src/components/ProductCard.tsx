"use client"

import React, { useEffect, useState } from 'react';
import { Heart, ShoppingCart, Star, Plus, ArrowRight } from 'lucide-react';
import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';
import { useWishlist } from '@/app/context/WishListContext';


interface productCardProps {
    name: string
    imgSrc: {
        _type: 'image',
        asset: {
            _ref: string;
            _type: 'reference';
        },
        key: string

    }[],
    Price: number,
    discountedPrice?: number,
    descrition: string,
    premium?: boolean,
    newProduct?: boolean
    reviews: number,
    slug: { current: string }
}


const ProductCard = ({ name, imgSrc, Price, discountedPrice, descrition, premium, newProduct, reviews, slug }: productCardProps) => {

    const router = useRouter()
    const { addItem } = useCart();
    const { state: wishlistState, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlist()



    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const imageUrl: string = imgSrc && imgSrc[0]?.asset
        ? ''
        : '/placeholder-image.jpg';


    useEffect(() => {
        setIsLiked(wishlistState.items.some(item => item.id === slug.current));
    }, [wishlistState, slug]);


    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem({
            id: slug.current,
            name,
            price: Price,
            image: imageUrl,
            quantity: 1
        });
        toast("Product added to cart");
    }

    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isLiked) {
            removeFromWishlist(slug.current);
            toast.success(`${name} removed from wishlist`);
        } else {
            addToWishlist({
                id: slug.current,
                name,
                price: Price,
                image: imageUrl
            });
            toast.success(`${name} added to wishlist`);
        }
        setIsLiked(!isLiked);
    }

    return (
        <div onClick={() => router.push(`/shop/${slug.current}`)} className="relative w-[310px] mt-10 ">
            {/* Floating background circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse delay-700"></div>

            <div
                onClick={() => router.push(`/shop/${slug.current}`)}
                className={`relative bg-white/80 backdrop-blur-md rounded-3xl transition-all duration-700 ${showDetails ? '' : ''
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Geometric decorations */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-[100px] transition-transform duration-500 origin-top-right"
                        style={{
                            transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                    ></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-transparent rounded-tr-[100px] transition-transform duration-500 origin-bottom-left"
                        style={{
                            transform: isHovered ? 'rotate(-45deg)' : 'rotate(0deg)',
                        }}
                    ></div>
                </div>

                {/* Main content container */}
                <div className="relative p-6 h-full">
                    {/* Image section */}
                    <div className="relative h-48 mb-4">
                        <div className={`absolute inset-0 transition-all duration-700 ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                            }`}>
                            <Image
                                src={imageUrl}
                                alt="Product"
                                className="h-full w-full "
                                objectFit='contain'
                                fill
                            />
                        </div>

                        {/* Floating particles */}
                        {isHovered && (
                            <div className="absolute inset-0">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-float"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            animationDelay: `${i * 200}ms`,
                                            animationDuration: `${1500 + Math.random() * 1000}ms`
                                        }}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price tag */}
                    <div className="absolute -right-3 top-4 bg-red-200 hover:bg-[#ee6a6a] text-white px-6 py-2 rounded-l-full shadow-lg transform transition-transform duration-300 hover:scale-105 flex">
                        <span className={` text-sm ${discountedPrice ? 'line-through' : ''} opacity-75`}>${Price}</span>
                        <span className={`${discountedPrice ? 'block' : 'hidden'} ml-2 text-lg font-bold`}>${discountedPrice}</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            {
                                premium ?
                                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#dc2626] to-[#feeb9d] text-white rounded-full animate-shimmer">
                                        Premium
                                    </span>
                                    :
                                    null
                            }

                            {
                                newProduct ?
                                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full animate-shimmer delay-150">
                                        New
                                    </span>
                                    :
                                    null
                            }
                        </div>

                        <h3 className="text-lg font-bold bg-black bg-clip-text text-transparent">
                            {name}
                        </h3>

                        {/* Interactive buttons */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {/* Like button */}
                                <button
                                    onClick={handleToggleWishlist}
                                    className="p-2 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                                >
                                    <Heart
                                        className={`h-5 w-5 transition-all duration-300 ${isLiked ? 'fill-[#dc2626] text-pink-500 scale-110' : 'text-gray-400'} group-hover:scale-110`}
                                    />
                                </button>

                                {/* Details toggle */}
                                <button
                                    onClick={() => setShowDetails(!showDetails)}
                                    className="p-2 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                                >
                                    <Plus
                                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${showDetails ? 'rotate-45' : 'rotate-0'
                                            } group-hover:scale-110`}
                                    />
                                </button>
                            </div>

                            {/* Add to cart button */}
                            {/* <button onClick={()=> router.push(`/shop/${slug.current}`)} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#dc2626] to-[#feeb9d] text-white rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                                <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                        Add to Cart
                                    </span>
                                    <span className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                        Buy Now
                                    </span>
                                </span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button> */}

                            <button
                                onClick={handleAddToCart}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#dc2626] to-[#feeb9d] text-white rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                            >
                                <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                        Add to Cart
                                    </span>
                                    <span className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                        Buy Now
                                    </span>
                                </span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>

                        {/* Expandable details */}
                        <div className={`overflow-hidden transition-all duration-700  z-30 ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="pt-4 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {descrition}
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={`transition-all duration-300 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                                } hover:scale-110`}
                                            style={{ transformOrigin: 'center', transitionDelay: `${i * 50}ms` }}
                                        />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-2">({reviews})</span>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ripple effect on hover */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default ProductCard;