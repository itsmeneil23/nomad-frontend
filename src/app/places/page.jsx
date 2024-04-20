"use client";
import React, { useState } from "react";

const cardsData = [
  {
    imageSrc:
      "/images/taj.jpg",
    title: "Taj Mahal",
    description: "Mausoleum in Agra, Uttar Pradesh",
    buttonText: "Explore Now",
  },
  {
    imageSrc:
      "/images/taj.jpg",
    title: "Taj Mahal",
    description: "Mausoleum in Agra, Uttar Pradesh",
    buttonText: "Explore Now",
  },
  {
    imageSrc:
      "/images/taj.jpg",
    title: "Taj Mahal",
    description: "Mausoleum in Agra, Uttar Pradesh",
    buttonText: "Explore Now",
  },
];

const Card = ({ imageSrc, title, description, buttonText }) => (
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={imageSrc} alt={`${title} Image`} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  </div>
);

export default function Input(){
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="pb-5 px-24">
    <form className="flex items-center justify-center py-5">
      <input
        type="text"
        placeholder="Type here"
        className="border w-full bl p-3 input-bordered  max-w-xs"
      />
      <button 
        onClick={handleClick}
        className={`transition-colors duration-300 ease-in-out ${
          isClicked
            ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            : "rounded text-white bg-slate-700 br p-3" 
        } text-white px-4 py-2 rounded-md`}
      >Send</button>
      </form>
      <div className="flex justify-around">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
