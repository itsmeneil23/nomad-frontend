
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-hero flex items-cetenter justify-center flex-col h-screen brightness-90 w-full bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <h2 className="text-white text-6xl text-center font-bold brightness-125">
          Take control of your
          <br />
          Custom Support
        </h2>
        <p className=" text-2xl text-center text-white font-medium w-1/2 mx-auto brightness-100">
          AI Tour Guide: Revolutionizing travel with personalized guidance,
          real-time recommendations, and cultural immersion, enhancing every
          journey with unparalleled insights and convenience.
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link
            href={"/places"}
            className="py-5 px-3 rounded-md text-white font-semibold text-xl brightness-150"
          >
            Get Started
          </Link>
          <Link
            href={"/planner"}
            className="py-5 px-3 rounded-md text-white font-semibold text-xl brightness-150"
          >
            Trip a plan
          </Link>
        </div>
      </div>
    </section>
  );
}
