import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-hero flex items-center justify-center flex-col h-screen brightness-90 w-full bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <h2 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-7xl font-black">
          Nomad AI
        </h2>
        <p className=" text-5xl text-center text-white font-semibold w-1/2 mx-auto brightness-100">
          Cater YOUR Unchartered
          <br />
          Adventures
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link
            href={"/places"}
            className="bg-white text-white bg-opacity-20 backdrop-blur-lg backdrop-filter backdrop-saturate-150 border border-gray-300 rounded-md p-3 font-medium brightness-100"
          >
            Get Started
          </Link>
          <Link
            href={"/planner"}
            className="bg-white text-white bg-opacity-20 backdrop-blur-lg backdrop-filter backdrop-saturate-150 border border-gray-300 rounded-md p-3 font-medium brightness-100"
          >
            Plan a Trip
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 pt-8">
          <h1 className="text-white text-2xl">Powered By</h1>
          <Image src="/images/gemini.png" alt="logo" width={125} height={125}/>
        </div>
      </div>
    </section>
  );
}
