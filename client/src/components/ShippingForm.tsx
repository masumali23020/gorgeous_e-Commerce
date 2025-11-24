import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { ShippingFormInputs, shippingFormSchema } from "../../type"

const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
        resolver: zodResolver(shippingFormSchema)
    })
    const router = useRouter()
    const handelShippingFrom: SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data);
        router.push(`/cart?step=3`, { scroll: false })

    }
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handelShippingFrom)}>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="name" id="name">Name</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="Enter Your Name" id="name" {...register("name")} />
                {errors.name && <p className="text-sm text-red-500"> {errors.name.message} </p>}

            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="email" id="email">Email</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="email" placeholder="example@gmail.com" id="email" {...register("email")} />
                {errors.email && <p className="text-sm text-red-500"> {errors.email.message} </p>}

            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="phone" id="phone">Phone Number</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="0172....9" id="phone" {...register("phone")} />
                {errors.phone && <p className="text-sm text-red-500"> {errors.phone.message} </p>}

            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="address" id="address">address</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="Enter your address" id="address" {...register("address")} />
                {errors.address && <p className="text-sm text-red-500"> {errors.address.message} </p>}

            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-500 font-semibold" htmlFor="city" id="city"> city</label>
                <input className="text-sm border-b border-gray-400 py-2 outline-none " type="text" placeholder="Enter your address" id="city" {...register("city")} />
                {errors.city && <p className="text-sm text-red-500"> {errors.city.message} </p>}

            </div>
            <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 ">
                Continue
                <ArrowRight className="w-3 h-3" />
            </button>
        </form>
    )
}

export default ShippingForm