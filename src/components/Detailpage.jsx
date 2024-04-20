import Image from "next/image";
import React from "react";

const Detailpage = () => {
  return (
    <div className="px-24">
      <h1 className="text-white text-2xl font-medium pb-3">Taj Mahal</h1>
      <div className="gap-2 flex pb-6">
        <Image
          src="/images/taj.jpg"
          alt="hero"
          width={500}
          height={500}
          className="rounded-md"
        />
        <div className="flex flex-col justify-between">
          <Image
            src="/images/taj.jpg"
            alt="hero"
            width={245}
            height={245}
            className="rounded-md"
          />
          <Image
            src="/images/taj.jpg"
            alt="hero"
            width={245}
            height={245}
            className="rounded-md"
          />
        </div>
      </div>
      <span>Rating: ⭐ ⭐ ⭐ ⭐</span>
      <p className="text-white pt-3">Mausoleum in Agra, Uttar Pradesh</p>
      <div>
        <ul className="flex gap-2 pt-3">
            <li className="p-2 border border-gray-600 rounded-full"><a href="#" className="flex items-center justify-center gap-2"><Image src="/images/share.svg" alt="share" width={15} height={15}/><span className="text-white">Share</span></a></li>
            <li className="p-2 border border-gray-600 rounded-full"><a href="#" className="flex items-center justify-center gap-2"><Image src="/images/location.svg" alt="share" width={15} height={15}/><span className="text-white">Direction</span></a></li>
        </ul>
      </div>
      <p className="text-white pt-6">
        The Taj Mahal is a breathtaking ivory-white marble mausoleum located in
        Agra, India. Built in the 17th century by the Mughal emperor Shah Jahan
        in memory of his beloved wife Mumtaz Mahal, it is renowned as a symbol
        of eternal love and one of the most iconic architectural masterpieces in
        the world. Its intricate craftsmanship, stunning symmetry, and
        picturesque gardens attract millions of visitors annually, making it a
        UNESCO World Heritage Site and a testament to enduring love and artistic
        excellence.
      </p>
    </div>
  );
};

export default Detailpage;
