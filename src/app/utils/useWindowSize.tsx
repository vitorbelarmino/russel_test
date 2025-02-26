import { useState, useEffect } from "react";

export function useWindowSize(): { width: number } {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
}
