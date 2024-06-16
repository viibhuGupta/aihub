import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/components/CardContext";
import toast, { Toaster } from 'react-hot-toast';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Hub",
  description: "Creatrated by Vibhu Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <CartProvider>
       <Navbar />
       {children}
       <Toaster    
       position="top-center"
       
       
       />
       </CartProvider>
      </body>
    </html>
  );
}
