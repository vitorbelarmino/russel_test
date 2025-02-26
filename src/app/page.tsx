"use client";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-10 sm:gap-20 bg-white">
      <Promotions />
      <Products />
    </div>
  );
}
