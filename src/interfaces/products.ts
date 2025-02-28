import { StaticImageData } from "next/image";

export enum Stock {
  InStock = "Em estoque",
  OutOfStock = "Sem estoque",
}
export interface IProduct {
  id: number;
  name: string;
  fullPrice: string;
  promotionPrice: string;
  discountPix?: number;
  image: StaticImageData;
  seller: string;
  stock: Stock;
  highlight: boolean;
  brandLogo?: StaticImageData;
}
