import Image from "next/image";

const Navbar = () => {
  return (
    <div className="pl-10 pt-10 flex gap-2">
      <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-transparent bg-clip-text text-2xl font-semibold">
        NOMAD
      </h1>
    </div>
  );
};

export default Navbar;
