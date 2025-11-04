import ProductLisat from "@/components/ProductLisat"
import Image from "next/image"

const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = await (await searchParams).category
  return (
    <div className=''>

      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductLisat params="homePage" category={category} />
    </div>
  )
}

export default Homepage