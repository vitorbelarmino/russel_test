"use client";
import Image from "next/image";
import { bannerImage } from "../assets";
import { promotions } from "../mocks/products";
import { Button } from "./Button";

export default function Promotions() {
  return (
    <div className="flex flex-col p-2 md:p-10 xl:px-32 gap-2 md:gap-10 justify-center bg-blackPrimary ">
      <Image src={bannerImage} alt="Promotions" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-10 w-full ">
        {promotions.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-around bg-logitech-gradient gap-4 p-4 sm:p-6 w-full rounded-md"
          >
            <Image src={product.image} alt={product.name} />
            <Image src={product?.brandLogo} alt={product.name} />
            <p className="text-logitechColor font-bold line-clamp-2 text-sm sm:line-clamp-3 sm:text-base">
              {product.name}
            </p>
            <div>
              <p className="line-through text-logitechColor text-xs sm:text-base">
                {product.fullPrice}
              </p>
              <p className="text-bluePrimary font-bold text-2xl xl:text-[32px]">
                {product.promotionPrice}
              </p>
            </div>

            <Button className="bg-bluePrimary hover:bg-grayPrimary transition p-2 text-black text-xl font-bold">
              Comprar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
