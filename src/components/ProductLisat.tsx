import Link from "next/link";
import { products } from "../../data";
import Categoris from "./Categoris";
import Filter from "./Filter";
import ProductCard from "./ProductCard";

const ProductLisat = ({ category, params }: { category: string, params: "homePage" | "products" }) => {

  const productss = products

  return (
    <div className="w-full">
      <Categoris />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-11">
        {productss.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

      <Link className="flex justify-end mt-2 text-sm underline" href={category ? `/products/?category=${category}` : "/products"} > View all </Link>

    </div>
  )
}

export default ProductLisat