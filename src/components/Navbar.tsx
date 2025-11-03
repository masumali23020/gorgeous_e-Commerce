import { Bell, Home, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            {/* left side  */}
            <Link href="/" className="flex items-center ">
                <Image src="/logo.png" alt="logo" width={36} height={36} className="w-6 h-6 md:h-9 md:w-9" />
                <p className="hidden md:block text-md font-medium tracking-wider text-amber-500">GORGEOUS</p>
            </Link>
            {/* right side  */}
            <div className="flex items-center gap-4">
                <SearchBar />
                <Link href="/">
                    <Home className="w-4 h-4 text-gray-600" />
                </Link>
                <Bell className="w-4 h-4 text-gray-600" />
                <ShoppingCart className="w-4 h-4 text-gray-600" />
                <Link className=" text-gray-600" href="/login" >Sign-in</Link>
            </div>
        </div>
    )
}

export default Navbar