"use client"

// Previous imports remain the same...
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, Car, CarFront, Truck, Zap, Fuel, GaugeCircle, BookmarkPlus, Mail, Phone } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import Image from "next/image"
import team1 from "../../public/images/image 68 (1).svg";
// Previous constants remain the same...

const categories = [
  "Automatics Cars",
  "SUVs",
  "Electrics Cars",
  "New in Stock",
  "Petrol",
  "Diesel"
]

const reviews = [
  {
    platform: "Trustpilot",
    logo: "https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg",
    rating: "Great",
    stars: 5,
    reviews: "5,801"
  },
  {
    platform: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    rating: "Great",
    stars: 5,
    reviews: "5,801"
  },
  {
    platform: "Birdeye",
    logo: "https://birdeye.com/wp-content/themes/birdeye/assets/images/logo-dark.svg",
    rating: "Great",
    stars: 5,
    reviews: "5,801"
  }
]

const team = [
  {
    name: "Courtney Henry",
    role: "Software Development Manager",
    email: "henry@boxcars.com",
    phone: "+30 595 59 291 2",
    bgColor: "bg-gray-50"
  },
  {
    name: "Jerome Bell",
    role: "Software Tester",
    email: "jerome@boxcars.com",
    phone: "+30 595 59 291 2",
    bgColor: "bg-blue-50"
  },
  {
    name: "Arlene McCoy",
    role: "Software Developer",
    email: "arlene@boxcars.com",
    phone: "+30 595 59 291 2",
    bgColor: "bg-indigo-50"
  },
  {
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    email: "jenny@boxcars.com",
    phone: "+30 595 59 291 2",
    bgColor: "bg-pink-50"
  },
  {
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    email: "jenny.w@boxcars.com",
    phone: "+30 595 59 291 2",
    bgColor: "bg-green-50"
  }
]

export default function Review() {
  // Previous code remains the same until Latest Cars section...

  return (
    <main className="min-h-screen bg-white">
  

    

      {/* Need Some Inspiration */}
      <section className="container flex flex-col justify-center items-start mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Need Some Inspiration?</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-xl  border bg-white hover:bg-gray-50 text-sm font-medium transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Who is BoxCar */}
      <section className="bg-blue-600 py-24 mt-16 rounded-xl mx-2">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[1fr,2fr] gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Who is BoxCar</h2>
              <p className="text-blue-100">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id es
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.platform}
                  className="bg-white rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <div className="text-lg font-semibold mb-2">{review.rating}</div>
                  <div className="flex text-green-500 mb-2">
                    {"★".repeat(review.stars)}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Based on {review.reviews} reviews
                  </div>
                  <img
                    src={review.logo}
                    alt={`${review.platform} logo`}
                    className="h-6 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {team.map((member) => (
          <div
            key={member.email}
            className={`${member.bgColor} group relative rounded-lg px-4 pt-2 flex flex-col items-center text-center h-full`}
          >
            <h3 className="font-semibold mb-1">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{member.role}</p>
            <div className="relative w-full h-60 mb-4">
              <Image
                alt="user"
                src={team1}
                layout="fill"
               
                className="rounded-lg w-full h-full  object-cover"
              />
            </div>
            <div className="group-hover:flex  flex-col gap-2 w-[80%] hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex bg-white p-2 rounded-full items-center justify-center gap-2 text-sm shadow-lg">
                <Mail className="h-4 w-4" />
                <span>{member.email}</span>
              </div>
              <div className="flex bg-white p-2 rounded-full items-center justify-center gap-2 text-sm shadow-lg">
                <Phone className="h-4 w-4" />
                <span>{member.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  )
}