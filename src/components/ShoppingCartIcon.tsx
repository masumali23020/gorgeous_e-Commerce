"use client";
import useCartStore from "@/stores/CartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();
  if (!hasHydrated) return null;
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-400 w-4 h-4 rounded-full flex items-center justify-center text-sm ">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}{" "}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
