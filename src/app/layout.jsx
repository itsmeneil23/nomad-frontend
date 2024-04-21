import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./places/_components/Navbar";

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
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
