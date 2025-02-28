"use client";
import { IProduct } from "@/interfaces/products";
import { products } from "@/mocks/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import { useWindowSize } from "@/utils/useWindowSize";

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  const [, setId] = useState("");
  const [product, setProduct] = useState<IProduct>();
  const { width } = useWindowSize();

  useEffect(() => {
    const getId = async () => {
      const { id } = await params;
      setId(id);
      getProduct(Number(id));
    };
    const getProduct = (id: number) => {
      const getProduct = products.find((product) => product.id === id);
      setProduct(getProduct);
    };
    getId();
  }, []);
  return (
    <div className="body bg-grayTertiary flex flex-col lg:flex-row items-center gap-10 px-4 py-8 xl:px-16 xl:py-[120px] cursor-default">
      {product && (
        <>
          <div className="sm:w-1/2 lg:w-full xl:w-full max-w-[624px]">
            <Image src={product?.image} alt={product?.name} />
          </div>
          <div className="product-details flex flex-col gap-10 xl:gap-4 text-blackSecundary">
            <div className="detalhes flex flex-col gap-6 xl:gap-4">
              <p className="font-bold text-2xl">{product.name}</p>
              <div className="stock-info flex flex-col xl:gap-4 xl:flex-row xl:items-center">
                <div className="flex gap-1">
                  <p>Vendido e entregue por</p>
                  <p className="text-bluePrimary font-bold">{product.seller}</p>
                </div>
                {width > 1280 && <span>|</span>}
                <p className="text-purpleSecundary font-bold">{product.stock}</p>
              </div>

              <div className="prices">
                <p className="line-through">{product.fullPrice}</p>
                <p className="font-bold text-purpleSecundary text-5xl">{product.promotionPrice}</p>
                <p>à vista no PIX</p>
              </div>
            </div>
            <div className="buttons flex flex-col lg:flex-row gap-4 ">
              <Button className="bg-purpleSecundary hover:bg-purplePrimary px-6 py-3 text-xl font-bold text-grayTertiary cursor-default m-[1px] hover:m-0 hover:px-[25px] hover:py-[13px]">
                COMPRAR
              </Button>
              <Button className="bg-grayTertiary hover:bg-purplePrimary px-6 py-3 text-xl font-bold text-purpleSecundary border-purpleSecundary border-[1px] cursor-default">
                ADICIONAR AO CARRINHO
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
