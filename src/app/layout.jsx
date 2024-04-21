import { Urbanist } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Loader from "./places/_components/Loader";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Nomad",
  description: "AI Tour Guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body className={urbanist.className}>
        <div className="h-16 items-center justify-start w-full p-10 flex gap-2">
          <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
          <h1 className="text-white brightness-150 text-4xl font-bold">Nomad</h1>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
