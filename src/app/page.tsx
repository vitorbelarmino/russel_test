"use client";
import Products from "./components/Products";
import Highlight from "./components/Highlights";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-10 sm:gap-20 bg-grayTertiary">
      <Highlight />
      <Products />
    </div>
  );
}
