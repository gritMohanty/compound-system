"use client";
import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setIsHovered(false);
    if (!ref.current) return;
    ref?.current?.addEventListener("mouseover", () => {
      setIsHovered(true);
    });
    return () =>
      ref?.current?.removeEventListener("mouseover", () => {
        setIsHovered(false);
      });
  }, [ref.current]);

  return [ref, isHovered];
};
