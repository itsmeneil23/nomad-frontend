"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TextCard from "../_components/textcard";

const data = {
  name: "Taj Mahal",
  description:
    "The Taj Mahal is a breathtaking ivory-white marble mausoleum located in Agra, India. Built in the 17th century by the Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is renowned as a symbol of eternal love and one of the most iconic architectural masterpieces in the world. Its intricate craftsmanship, stunning symmetry, and picturesque gardens attract millions of visitors annually, making it a UNESCO World Heritage Site and a testament to enduring love and artistic excellence.",
  location: "Mausoleum in Agra, Uttar Pradesh",
  googleMapsUrl: "https://www.google.com/maps",
  nearby_places: [
    { name: "Agra Fort" },
    { name: "Fatehpur Sikri" },
    { name: "Mehtab Bagh" },
  ],
  nearby_attractions: [
    { name: "Agra Fort" },
    { name: "Fatehpur Sikri" },
    { name: "Mehtab Bagh" },
  ],
};

export default function Detailpage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full p-10">
      {isLoading ? (
        <div className="flex justify-center pt-40 items-center h-full">
          <Image
            src="/images/loading-circle.svg"
            alt="loader"
            width={50}
            height={50}
          />
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-white text-4xl font-bold pb-3">Location Details</h1>
            <div className="gap-5 flex pb-6">
              <Image
                src="/images/taj.jpg"
                alt="Taj Mahal"
                width={500}
                height={500}
                className="rounded-md"
              />
              <div className="flex flex-col gap-5 items-center justify-between h-full w-full">
                <Image
                  src="/images/taj.jpg"
                  alt="Taj Mahal"
                  width={240}
                  height={240}
                  className="rounded-md"
                />
                <Image
                  src="/images/taj.jpg"
                  alt="Taj Mahal"
                  width={240}
                  height={240}
                  className="rounded-md"
                />
              </div>
              <div className="flex items-start gap-3 justify-center flex-col">
                <h1 className="text-white text-3xl font-semibold pb-3">
                  {data.name}
                </h1>
                <p className="text-white">{data.description}</p>
                <p className="text-white pt-3">
                  <span className="font-semibold text-lg">Location : </span>
                  {data.location}
                </p>
                <span>Rating: ⭐ ⭐ ⭐ ⭐</span>
                <Link
                  href={data.googleMapsUrl}
                  className="flex items-center justify-center gap-2 px-2 p-2 border border-gray-600 rounded-full"
                >
                  <Image
                    src="/images/location.svg"
                    alt="Share"
                    width={15}
                    height={15}
                  />
                  <span className="text-white">Direction</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold pb-3">
              Nearby Attractions & Activities
            </h1>
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold pb-3">Places nearby</h1>
            {data.nearby_places.map((item, index) => (
              <TextCard key={index} text={item.name} />
            ))}
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold pb-3">
              Nearby Attractions
            </h1>
            {data.nearby_attractions.map((item, index) => (
              <TextCard key={index} text={item.name} />
            ))}
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold pb-3">Distances</h1>
          </div>
        </>
      )}
    </section>
  );
}
