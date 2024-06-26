"use client"
import React, { useState, useEffect } from "react";
import Card from "./_components/imagecard";

const cardsData = [
  {
    imageSrc: "/images/taj.jpg",
    title: "Taj Mahal",
    description: "Mausoleum in Agra, Uttar Pradesh",
    buttonText: "Explore Now",
  },
  {
    imageSrc: "/images/taj.jpg",
    title: "Taj Mahal",
    description: "Mausoleum in Agra, Uttar Pradesh",
    buttonText: "Explore Now",
  },
  {
    imageSrc: "/images/taj.jpg",
    title: "Taj Mahal",
    description: "Mausoleum in Agra, Uttar Pradesh",
    buttonText: "Explore Now",
  },
];

export default function Input() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="pb-5 px-24">
      <form className="flex items-center relative justify-center py-5 h-22 w-full">
        <textarea
          type="text"
          placeholder="Let your thoughts flow free ..."
          className="border p-3 input-bordered w-full rounded-lg pr-24 placeholder:text-lg"
        ></textarea>
        <button className="transition-colors text-white bg-slate-700 p-3 rounded-md absolute right-5">
          Send
        </button>
      </form>
      {isLoading ? (
        <div className="flex justify-around animate-pulse">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-64 h-48 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="flex justify-around">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      )}
    </div>
  );
}
