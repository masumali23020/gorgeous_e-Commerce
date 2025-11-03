import ProductLisat from "@/components/ProductLisat"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className=''>

      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductLisat />
    </div>
  )
}

export default Homepage