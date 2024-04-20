import React from "react";

const Planner = () => {
  const places = [
    { name: "Kochi Marine Drive", time: "10:00AM" },
    { name: "Fort Kochi", time: "11:00AM" },
    { name: "Wonderla", time: "12:00PM" },
    { name: "Lulu Mall", time: "01:00PM" },
    { name: "Metro City", time: "02:00PM" },
    { name: "Cochin Airport", time: "03:00PM" },
    { name: "Cochin Railway Station", time: "04:00PM" },
    { name: "Cochin University", time: "05:00PM" },
    { name: "Mattanchery Palace", time: "06:00PM" },
  ];

  return (
    <section className="px-24 border border-gray-800 pt-6">
      <h1 className="text-3xl text-white pb-6">Trip Planner</h1>
      <div>
        <ul className="timeline timeline-vertical">
          {places.map((place, index) => (
            <li key={index}>
              <div className="timeline-start">{place.time}</div>
              <div className="timeline-middle">
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
    </section>
  );
};

export default Planner;
