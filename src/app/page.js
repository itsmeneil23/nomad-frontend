import Detailpage from "@/components/Detailpage";
import Planner from "@/components/Planner";
import Input from "@/components/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-hero h-screen">
        <div className="px-24 pt-10 flex gap-2">
          <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
          <h1 className="text-white text-4xl font-bold">
            Nomad
          </h1>
        </div>
        <section className="flex  flex-col items-center justify-between px-24 pt-32">
          <div className="h-screen w-full">
            <div className="flex justify-between text-center">
              <div>
              <h2 className="text-white text-6xl font-bold">Take control of your</h2>
              <h2 className="text-gray-200 text-6xl font-bold">Custom Support</h2>
                <p className="font-medium text-xl text-gray-200 pt-10 w-[50%] mx-auto">
                  AI Tour Guide: Revolutionizing travel with personalized
                  guidance, real-time recommendations, and cultural immersion,
                  enhancing every journey with unparalleled insights and
                  convenience.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center pt-20 gap-5">
            <button className=" px-6 py-4 bg-[#CCF32F] text-black rounded-lg">Take a trip</button>
            <button className=" bg-white bg-opacity-25 backdrop-blur-lg px-3 py-4 rounded-lg shadow-lg text-white">Live Demo</button>
            </div>
          </div>
        </section>
      </section>
      <Input/>
      <Detailpage />
      <Planner />
    </main>
  );
}
