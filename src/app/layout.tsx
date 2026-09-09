import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope"});
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"),title:{default:"TechCart Pakistan | Smart Tech. Better Prices.",template:"%s | TechCart Pakistan"},description:"Shop mobile and technology accessories with delivery options across Pakistan."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={manrope.variable}><CartProvider><Header/><main>{children}</main><Footer/></CartProvider></body></html>}
