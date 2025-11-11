"use client"

import PaymentForm from "@/components/PaymentForm"
import ShippingForm from "@/components/ShippingForm"
import useCartStore from "@/stores/CartStore"
import { ArrowRight, Trash2 } from "lucide-react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import { CartItemsType, ShippingFormInputs } from "../../../type"

const steps = [
    {
        id: 1,
        title: "Shopping Cart"
    },
    {
        id: 2,
        title: "Shipping Address"
    },
    {
        id: 3,
        title: "Payment Method"
    }
]

// const cartItems: CartItemsType = [
//     {
//         id: 1,
//         name: "Adidas CoreFit T-Shirt",
//         shortDescription:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         description:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         price: 39.9,
//         sizes: ["s", "m", "l", "xl", "xxl"],
//         colors: ["gray", "purple", "green"],
//         images: {
//             gray: "/products/1g.png",
//             purple: "/products/1p.png",
//             green: "/products/1gr.png",
//         },
//         quantity: 1,
//         selectedSize: "M",
//         selectedColor: "gray"
//     },
//     {
//         id: 2,
//         name: "Puma Ultra Warm Zip",
//         shortDescription:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         description:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         price: 59.9,
//         sizes: ["s", "m", "l", "xl"],
//         colors: ["gray", "green"],
//         images: { gray: "/products/2g.png", green: "/products/2gr.png" },
//         quantity: 11,
//         selectedSize: "M",
//         selectedColor: "gray"
//     },
//     {
//         id: 3,
//         name: "Nike Air Essentials Pullover",
//         shortDescription:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         description:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         price: 69.9,
//         sizes: ["s", "m", "l"],
//         colors: ["green", "blue", "black"],
//         images: {
//             green: "/products/3gr.png",
//             blue: "/products/3b.png",
//             black: "/products/3bl.png",
//         },
//         quantity: 5,
//         selectedSize: "L",
//         selectedColor: "black"
//     },
// ]
const CartPage = () => {
    const searchParams = useSearchParams()
    const [shippingForm, setShippingForm] = useState<ShippingFormInputs>()
    const router = useRouter()
    const { cart: cartItems, removeFromCart } = useCartStore()



    const handelDelteCart = (item: CartItemsType): void => {
        removeFromCart(item)
        toast.success("Deleting Cart item")
    }

    const isActive: number = parseInt(searchParams.get("step") || "1")
    return (
        <div className="flex flex-col items-center justify-center mt-12">
            {/* title  */}
            <h1 className="text-2xl font-medium ">Your Shopping Cart</h1>
            {/* step  */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-4">
                {steps.map((step: Step) => (
                    <div key={step.id} className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === isActive ? "border-gray-800" : "border-gray-200"}`}>
                        <div className={`flex items-center justify-center w-6 h-5 rounded-full p-4 ${step.id === isActive ? "bg-gray-800" : "bg-gray-300"} text-white`}> {step.id}</div>
                        <p className={`text-sm font-medium ${step.id === isActive ? "text-gray-800" : "text-gray-400"}`}>{step.title} </p>

                    </div>
                ))}
            </div>

            {/* step & details  */}

            <div className="w-full flex flex-col lg:flex-row gap-16 mt-4">
                {/* right side  */}
                <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 rounded-lg flex flex-col gap-8 ">
                    {isActive === 1 ? (
                        <div>
                            {cartItems.map(item => (
                                // singel cart  
                                <div key={item.id + item.selectedColor + item.selectedSize} className="flex items-center justify-between  ">
                                    {/* image and details  */}
                                    <div className="flex gap-8">
                                        {/* image  */}
                                        <div className="relative bg-gray-50 overflow-hidden w-32 h-32 rounded-lg">
                                            <Image src={item.images[item.selectedColor]} alt={item.name} fill className="object-contain" />
                                        </div>
                                        {/* item details  */}
                                        <div className="flex flex-col justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="font-medium text-sm">{item.name} </p>
                                                <p className="text-xs text-gray-500">Quantity:{" "} {item.quantity} </p>
                                                <p className="text-xs text-gray-500">Size:{" "} {item.selectedSize} </p>
                                                <p className="text-xs text-gray-500">Color:{" "} {item.selectedColor} </p>
                                            </div>
                                            <p className="font-medium ">${item.price} </p>
                                        </div>
                                    </div>
                                    {/* delete button  */}
                                    <button onClick={() => handelDelteCart(item)} className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex justify-center items-center cursor-pointer">
                                        <Trash2 className="w-3 h-3" />
                                    </button>

                                </div>
                            ))}
                        </div>

                    ) : isActive === 2 ? (<ShippingForm setShippingForm={setShippingForm} />) : isActive === 3 && shippingForm ? (<PaymentForm />) : <p className="text-sm text-red-500">please fill in the shiooing form to continue.</p>}
                </div>
                {/* left side  */}
                <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 rounded-lg flex flex-col gap-8 p-4 h-max ">
                    <h1>Card Details </h1>
                    <div className="flex flex-col gap-4  ">
                        {/* subtotal  */}
                        <div className="flex justify-between text-sm">
                            <p className="text-sm text-gray-500">Subtotal</p>
                            <p className="text-sm font-medium">$ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                        </div>
                        {/* discount   */}
                        <div className="flex justify-between text-sm">
                            <p className="text-sm text-gray-500">Discount</p>
                            <p className="text-sm font-medium">$10</p>
                        </div>
                        {/* Shipping Charge    */}
                        <div className="flex justify-between text-sm">
                            <p className="text-sm text-gray-500">Shipping fee</p>
                            <p className="text-sm font-medium">$10</p>
                        </div>

                        {/* total Amount  */}
                        <hr className="border-gray-200" />
                        <div className="flex justify-between">
                            <p className="text-sm text-gray-500 font-semibold">Total Amount</p>
                            <p className="text-sm font-semibold">$ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                        </div>
                    </div>
                    {isActive === 1 &&
                        <button onClick={() => router.push("/cart?step=2", { scroll: false })} className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 ">
                            Continue
                            <ArrowRight className="w-3 h-3" />
                        </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default CartPage