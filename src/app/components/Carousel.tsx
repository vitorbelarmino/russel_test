import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";
import { useWindowSize } from "../utils/useWindowSize";
import { useEffect, useState } from "react";

interface Iprops {
  products: {
    name: string;
    image: StaticImageData;
    fullPrice: string;
    promotionPrice: string;
    discountPix: number;
  }[];
}

export default function Carousel({ products }: Iprops) {
  const [slides, setSlides] = useState(5);
  const { width } = useWindowSize();
  useEffect(() => {
    console.log(width);
    const getQuantitySlides = () => {
      if (width === 0) return 5;
      if (width < 640) return 2;
      if (width < 768) return 3;
      if (width < 1024) return 3;
      if (width < 1280) return 4;
      return 5;
    };
    console.log(getQuantitySlides());
    setSlides(getQuantitySlides());
  }, [width]);
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={slides}
      spaceBetween={width < 640 ? 16 : 24}
      className="w-full border-2 border-grayPrimary"
    >
      {products.map((product, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col gap-4 p-4 text-blackSecundary hover:bg-graySecundary min-w-[164px] min-h-[372px] md:min-w-[232px] md:min-h-[455px]">
            <Image sizes="132" src={product.image} className="w-full rounded-xl" alt="Slide" />
            <p className="font-bold text-sm line-clamp-2 sm:text-base sm:line-clamp-3">
              {product.name}
            </p>

            <div className="flex flex-col">
              <p className="line-through text-xs sm:text-sm ">{product.fullPrice}</p>
              <p className="font-bold text-lg">{product.promotionPrice}</p>
              <p className="text-purplePrimary text-xs sm:text-sm">{`com ${product.discountPix}% de desconto no PIX`}</p>
            </div>

            <Button className="bg-purpleSecundary hover:bg-purplePrimary text-white p-2 font-bold">
              Comprar
            </Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
