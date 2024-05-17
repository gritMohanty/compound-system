"use client";
import { useHover } from "@/app/hooks/useHover";
import "./index.css";
import { useState } from "react";

export const Rating = ({ stars }: {stars: number}) => {
  const initialState = Array.from({ length: stars }, (_, i) => i).map((n) => {
    return {
      id: n,
      isHovered: false,
    };
  });

  const [hoveredStars, setHoveredStars] = useState(initialState);

  const fillStars = (id: number) => {
    const newState = Array.from({ length: stars }, (_, i) => i).map((n) => {
      return {
        id: n,
        isHovered: id < n ? false : true,
      };
    });
    setHoveredStars(newState);
  };

  return (
    <div className="wrapper">
      {hoveredStars.map((value) => (
        <div
          className={value.isHovered ? "container-yellow" : "container"}
          key={value.id}
          onMouseOver={() => fillStars(value.id)}
        ></div>
      ))}
    </div>
  );
};
