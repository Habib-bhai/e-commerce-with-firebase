"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "@/components/ui/sonner"
import { WishlistProvider } from "./context/WishListContext";
import { AuthContextProvider } from "@/context/AuthContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        >


          <CartProvider>
            <WishlistProvider>

              <Header />
              <AuthContextProvider>
              {children}
              </AuthContextProvider>
              <Toaster />
              <Footer />

            </WishlistProvider>
          </CartProvider>
        </body>
      </html>
    
  );
}
