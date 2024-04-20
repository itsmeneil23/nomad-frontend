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
          </div>
          <form className="flex items-center justify-center pt-24">
            <input
              type="text"
              placeholder="Type here"
              className="p-4 bl w-full max-w-xs"
            />
            <button className="p-4 br bg-slate-800">Send</button>
          </form>
        </section>
        <section className="flex justify-around w-full mt-2">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Taj Mahal</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore More</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Fort Kochi</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore More</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mantanchery Palace</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore More</button>
              </div>
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
