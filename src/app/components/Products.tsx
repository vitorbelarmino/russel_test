"use client";
import Carousel from "./Carousel";
import { products } from "../mocks/products";

export default function Products() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 p-4 md:p-10 xl:px-32">
      <div className="flex items-center gap-2 h-5">
        <p className="font-medium text-xl sm:text-2xl text-blackSecundary">Placas de Vídeo</p>
        <div className="flex items-center bg-purplePrimary bg-opacity-30 p-1 ">
          <p className="font-bold text-[10px] sm:text-xs text-purplePrimary">HARDWARE</p>
        </div>
      </div>

      <Carousel products={products} />
    </div>
  );
}
