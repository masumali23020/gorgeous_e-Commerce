import ProductLisat from "@/components/ProductLisat"


const ProductPage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
    const category = await (await searchParams).category
    return (
        <div>
            <ProductLisat params="products" category={category} />
        </div>
    )
}

export default ProductPage