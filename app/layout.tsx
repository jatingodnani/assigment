import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Navbar from '@/components/compo/Navbar'
import Footer  from '@/components/compo/Footer'
import { DM_Sans } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: 'normal'
 })
export const metadata: Metadata = {
  title: 'BoxCars - Find Your Dream Car',
  description: 'Find and buy your perfect car with BoxCars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}