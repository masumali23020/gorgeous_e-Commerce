import { products } from "../../data";
import Categoris from "./Categoris";
import ProductCard from "./ProductCard";

const ProductLisat = () => {

  const productss = products

  return (
    <div className="w-full">
      <Categoris />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-11">
        {productss.map(product => <ProductCard key={product.id} product={product} />)}

      </div>

    </div>
  )
}

export default ProductLisat