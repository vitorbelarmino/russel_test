"use client";
import Image from "next/image";
import { bannerImage } from "../../assets";
import { products } from "../../mocks/products";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export default function Highlight() {
  const router = useRouter();
  const handleBuyClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };
  const highlight = products.filter((product) => product.highlight);
  return (
    <div className="flex flex-col p-4 md:p-10 xl:px-32 gap-2 md:gap-10 justify-center bg-blackPrimary">
      <div
        className="w-full aspect-[323/158] md:h-[366px] bg-cover bg-center 2xl:h-[450px]"
        style={{ backgroundImage: `url(${bannerImage.src})` }}
      ></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center gap-4 w-full">
        {highlight.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-around bg-logitech-gradient gap-4 p-4 sm:p-6 max-w-[310px] rounded-md cursor-default"
          >
            <div>
              <Image src={product.image} alt={product.name} />
            </div>
            {product.brandLogo && <Image src={product.brandLogo} alt={product.name} />}
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

            <Button
              onClick={() => handleBuyClick(product.id)}
              className="bg-bluePrimary hover:bg-grayPrimary transition-all hover:p-[9px] hover:m-0 m-[1px] cursor-default p-2 text-black text-xl font-bold"
            >
              COMPRAR
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
