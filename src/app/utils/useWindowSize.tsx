import { useState, useEffect } from "react";

export function useWindowSize(): { width: number } {
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0); // validação para evitar erro no servidor
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
}
