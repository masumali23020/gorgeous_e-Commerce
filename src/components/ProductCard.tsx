"use client"
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductType } from "../../type";

const ProductCard = ({ product }: { product: ProductType }) => {
    const [productTypes, setProductTypes] = useState({
        size: product.sizes[0],
        color: product.colors[0]
    })
    const handelProductTypes = ({ type, value }: { type: "size" | "color", value: string }) => {
        setProductTypes((preVale) => ({
            ...preVale,
            [type]: value
        }))

    }

    return (
        <div className='shadow-lg rounded-lg '>
            {/* image  */}
            <Link href={'/products/${product.id}'}>
                <div className="relative aspect-[2/3]">
                    <Image
                        src={product.images[productTypes.color]}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-all duration-300"
                    />

                </div>
            </Link>

            {/* product details  */}
            <div className="flex flex-col gap-2 p-4">
                <h1 className="font-medium">{product.name} </h1>
                <p className="text-sm text-gray-500">{product.shortDescription} </p>

                {/* product types  */}
                <div className="flex items-center gap-4 text-xs">
                    {/* size  */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Size</span>
                        <select onChange={(e) => handelProductTypes({ type: "size", value: e.target.value })} name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1">
                            {product.sizes.map(size => (
                                <option value={size} key={size}>{size.toUpperCase()} </option>
                            ))}
                        </select>

                    </div>
                    {/* color  */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Color</span>
                        <div className="flex items-center gap-2">
                            {product.colors.map(color => (
                                <div onClick={() => handelProductTypes({ type: "color", value: color })} className={`cursor-pointer border-1 rounded-full ${productTypes.color === color ? "bg-gray-400" : "bg-gray-200"} p-[1.5px] `} key={color}>
                                    <div className="w-[14px] h-[14px] rounded-full c" style={{ backgroundColor: color }} />

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* price and add to cart  */}
                <div className="flex justify-between items-center">
                    <p className=" font-medium"> {product.price.toFixed(2)}</p>
                    <button className="ring ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-150 flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart</button>

                </div>
            </div>


        </div>
    )
}

export default ProductCard