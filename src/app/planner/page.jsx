"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image"; 

export default function Planner() {
  const places = [
    { name: "Kochi Marine Drive", time: "10:00 AM" },
    { name: "Fort Kochi", time: "11:00 AM" },
    { name: "Wonderla", time: "12:00 PM" },
    { name: "Lulu Mall", time: "01:00 PM" },
    { name: "Metro City", time: "02:00 PM" },
    { name: "Cochin Airport", time: "03:00 PM" },
    { name: "Cochin Railway Station", time: "04:00 PM" },
    { name: "Cochin University", time: "05:00 PM" },
    { name: "Mattanchery Palace", time: "06:00 PM" },
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-24 border border-gray-800 pt-6 ">
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
          <h1 className="text-3xl text-white pb-6">Trip Planner</h1>
          <div>
            <ul className="timeline timeline-vertical">
              {places.map((place, index) => (
                <li key={index}>
                  <div className="timeline-start ">{place.time}</div>
                  <div className="px-40 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">{place.name}</div>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
