import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-hero flex items-cetenter justify-center flex-col h-screen brightness-75 w-full bg-cover bg-no-repeat">
      <div className="h-16items-center justify-start w-full p-10 flex gap-2">
        <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
        <h1 className="text-white brightness-150 text-4xl font-bold">Nomad</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
        <h2 className="text-white text-6xl text-center font-bold brightness-125">
          Take control of your
          <br />
          Custom Support
        </h2>
        <p className="font-medium text-xl text-center text-gray-200 w-1/2 mx-auto brightness-100">
          AI Tour Guide: Revolutionizing travel with personalized guidance,
          real-time recommendations, and cultural immersion, enhancing every
          journey with unparalleled insights and convenience.
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link
            href={"/places"}
            className="py-5 px-3 rounded-md text-white font-semibold text-xl"
          >
            Get Started
          </Link>
          <Link
            href={"/places"}
            className="py-5 px-3 rounded-md text-white font-semibold text-xl"
          >
            Try it Out !
          </Link>
        </div>
      </div>
    </section>
  );
}
