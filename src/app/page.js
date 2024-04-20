import Detailpage from "@/components/Detailpage";
import Navbar from "@/components/Navbar";
import UserInput from "@/components/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section className="flex  flex-col items-center justify-between px-24 pt-32">
        <section className="h-screen w-full">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <p className="font-medium text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-transparent bg-clip-text ">
                AI Tour Guide: Revolutionizing travel with personalized
                guidance, real-time recommendations, and cultural immersion,
                enhancing every journey with unparalleled insights and
                convenience.
              </p>
            </div>
            <div className="w-1/2 h-full">
              <Image
                src="/images/hero.jpeg"
                alt="hero"
                width={500}
                height={500}
                className="h-full w-full rounded-lg"
              />
            </div>
          </div>
      <UserInput></UserInput>
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
      <Detailpage />
    </main>
  );
}
