"use client"

import Detailpage from "@/app/places/placesDetail/page";
import Planner from "@/app/planner/page";
import Input from "@/app/places/page";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  
  return (
    <main>
      <section className="bg-hero h-screen filter brightness-70 absolute inset-0 w-full object-cover darken-overlay bg-cover bg-no-repeat">
        <div className="px-24 pt-10 flex gap-2">
          <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
          <h1 className="text-white brightness-150 text-4xl font-bold">
            Nomad
          </h1>
        </div>
        <section className="flex  flex-col items-center justify-between px-24 pt-32">
          <div className="h-full w-full">
            <div className="flex justify-between text-center">
              <div>
              <h2 className="text-white text-6xl font-bold brightness-125">Take control of your</h2>
              <h2 className="text-gray-200 text-6xl font-bold brightness-100">Custom Support</h2>
                <p className="font-medium text-xl text-gray-200 pt-10 w-[50%] mx-auto brightness-100">
                  AI Tour Guide: Revolutionizing travel with personalized
                  guidance, real-time recommendations, and cultural immersion,
                  enhancing every journey with unparalleled insights and
                  convenience.
                </p>
                <Link href={"/places"} className="bg-blue-200 p-5">next page</Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
