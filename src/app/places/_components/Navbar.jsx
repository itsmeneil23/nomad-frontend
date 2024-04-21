import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="h-14 items-center justify-start w-full px-10 pt-8 pb-1 flex bg-black">
          <Link href={"/"} className="flex">
            <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
            <h1 className="text-white brightness-150 text-4xl font-bold pl-3">
              Nomad
            </h1>
          </Link>
        </div>
        <div className="w-full bg-black">
        <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-teal-500 bg-clip-text text-transparent pl-16 text-sm pb-2">BEYOND THE MAPS</span>
        </div>
    </div>
  )
}

export default Navbar
