"use client";
import Carousel from "./Carousel";
import { products } from "../mocks/products";

export default function Products() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 p-4 md:p-10 xl:px-32">
      <p className="font-medium text-xl sm:text-2xl">Placas de Vídeo</p>
      <div className="bg-purplePrimary bg-opacity-10">
        <p className="font-bold text-[10px] text-purplePrimary">HARDWARE</p>
      </div>
      <Carousel products={products} />
    </div>
  );
}
