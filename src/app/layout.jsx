import { Urbanist } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Nomad",
  description: "AI Tour Guide",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body className={urbanist.className}>
        <div className="h-16 items-center justify-start w-full p-10 flex gap-2">
          <Link href={"/"} className="btn">
            <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
            <h1 className="text-white brightness-150 text-4xl font-bold">
              Nomad
            </h1>
          </Link>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
