"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { ShoppingCartIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { PaymentFormInputs, paymentFormSchema } from "../../type"

const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentFormSchema)
    })
    const router = useRouter()
    const handelPaymentFrom: SubmitHandler<PaymentFormInputs> = (data) => {

    }
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handelPaymentFrom)}>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="cardHolder" id="cardHolder">Card Holder Name</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="Enter Your Name" id="cardHolder" {...register("cardHolder")} />
                {errors.cardHolder && <p className="text-sm text-red-500"> {errors.cardHolder.message} </p>}

            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="cardNumber" id="cardNumber">Card Number</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="0172....9" id="cardNumber" {...register("cardNumber")} />
                {errors.cardNumber && <p className="text-sm text-red-500"> {errors.cardNumber.message} </p>}

            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="expirationDate" id="expirationDate">Expiration Date</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="07/28" id="expirationDate" {...register("expirationDate")} />
                {errors.expirationDate && <p className="text-sm text-red-500"> {errors.expirationDate.message} </p>}

            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="cvv" id="cvv"> cvv</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="Enter your cvv number" id="cvv" {...register("cvv")} />
                {errors.cvv && <p className="text-sm text-red-500"> {errors.cvv.message} </p>}

            </div>
            <div className="flex items-center gap-2 mt-2">
                <Image src="/klarna.png" alt="kalam" width={50} height={25} className="rounded-md" />
                <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
                <Image src="/cards.png" alt="card" width={50} height={25} className="rounded-md" />
            </div>
            <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 ">
                Checkout
                <ShoppingCartIcon className="w-3 h-3" />
            </button>
        </form>
    )
}

export default PaymentForm