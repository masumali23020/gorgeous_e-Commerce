"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { CartItemsType } from "../../../type"

const steps = [
    {
        id: 1,
        title: "Shopping Cart"
    },
    {
        id: 2,
        title: "Shippind Address"
    },
    {
        id: 3,
        title: "Payment Method"
    }
]

const cartItems: CartItemsType = [
    {
        id: 1,
        name: "Adidas CoreFit T-Shirt",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
        quantity: 1,
        selectedSize: "M",
        selectedColor: "gray"
    },
    {
        id: 2,
        name: "Puma Ultra Warm Zip",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 59.9,
        sizes: ["s", "m", "l", "xl"],
        colors: ["gray", "green"],
        images: { gray: "/products/2g.png", green: "/products/2gr.png" },
        quantity: 11,
        selectedSize: "M",
        selectedColor: "gray"
    },
    {
        id: 3,
        name: "Nike Air Essentials Pullover",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 69.9,
        sizes: ["s", "m", "l"],
        colors: ["green", "blue", "black"],
        images: {
            green: "/products/3gr.png",
            blue: "/products/3b.png",
            black: "/products/3bl.png",
        },
        quantity: 5,
        selectedSize: "L",
        selectedColor: "black"
    },
]
const CartPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const isActive = parseInt(searchParams.get("step") || "1")
    return (
        <div className="flex flex-col items-center justify-center mt-12">
            {/* title  */}
            <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
            {/* step  */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {steps.map((step) => (
                    <div key={step.id} className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === isActive ? "border-gray-800" : "border-gray-200"}`}>
                        <div className={`flex items-center justify-center w-6 h-5 rounded-full p-4 ${step.id === isActive ? "bg-gray-800" : "bg-gray-100"} text-white`}> {step.id}</div>
                        <p className={`text-sm font-medium ${step.id === isActive ? "text-gray-800" : "text-gray-400"}`}>{step.title} </p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartPage