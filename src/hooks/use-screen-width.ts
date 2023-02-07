import { useEffect, useState } from "react";

export function useScreenWidth(): number {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const calcInnerWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);
  return width;
}