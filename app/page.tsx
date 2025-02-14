"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, Car, CarFront, Truck, Zap, Fuel, GaugeCircle, BookmarkPlus, MoveUpRight, ChevronRight } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import carfront from "../public/images/car.svg"
import { toast } from "sonner"
import Image from "next/image"
import van from "../public/images/electric-car 1.svg"
import car from "../public/images/Group.svg"
import choose1 from "../public/images/Group (1).svg";
import choose2 from "../public/images/Group (2).svg";
import choose3 from "../public/images/tag (1) 1.svg";
import choose4 from "../public/images/price-tag (1) 1.svg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Review from "@/components/compo/Review"
import BlogPost from "@/components/compo/Blogpost"
import Newsletter from "@/components/compo/Newsletter"
import PremiumBrand from "@/components/compo/Premiumbrand"
import PaginationCard from "@/components/compo/PaginationCard"
import CarCard from "@/components/compo/CarCard"
import { vehicleTypes, carListings, features } from "@/lib/data"
export default function Home() {
  const [activeTab, setActiveTab] = useState("SUV");

  const tabs = ["SUV", "Hatchback", "Sedan", "Hybrid", "Coupe"];

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  const [searchParams, setSearchParams] = useState({
    type: "",
    make: "",
    model: "",
    price: ""
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Search initiated!", {
      description: `Searching for ${searchParams.type} ${searchParams.make} ${searchParams.model} in price range ${searchParams.price}`,
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full pt-20 pb-32 bg-[#EEF1FB]">
        <div className="relative  text-center mb-8 ">
          <p className="text-blue-600 font-medium mb-4">Find cars for sale and for rent near you</p>
          <h1 className="text-[40px] font-bold mb-12">Find Your Dream Car</h1>

          {/* Search Bar */}
          <div className="max-w-4xl relative z-10 mx-auto bg-white rounded-full shadow-sm p-2 mb-16">
            <form onSubmit={handleSearch} className="flex flex-wrap items-center justify-center gap-2">
              <Select
                value={searchParams.type}
                onValueChange={(value) => setSearchParams({ ...searchParams, type: value })}
              >
                <SelectTrigger className="w-[140px] border-0 bg-transparent focus:ring-0">
                  <SelectValue placeholder="Used Cars" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="used">Used Cars</SelectItem>
                  <SelectItem value="new">New Cars</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                </SelectContent>
              </Select>

              <div className="w-px h-6 bg-white" />

              <Select
                value={searchParams.make}
                onValueChange={(value) => setSearchParams({ ...searchParams, make: value })}
              >
                <SelectTrigger className="w-[140px] border-0 bg-transparent focus:ring-0">
                  <SelectValue placeholder="Any Makes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-make">Any Make</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                </SelectContent>
              </Select>

              <div className="w-px h-6 bg-white" />

              <Select
                value={searchParams.model}
                onValueChange={(value) => setSearchParams({ ...searchParams, model: value })}
              >
                <SelectTrigger className="w-[140px] border-0 bg-transparent focus:ring-0">
                  <SelectValue placeholder="Any Models" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-model">Any Model</SelectItem>
                  <SelectItem value="camry">Camry</SelectItem>
                  <SelectItem value="civic">Civic</SelectItem>
                  <SelectItem value="f150">F-150</SelectItem>
                  <SelectItem value="3-series">3 Series</SelectItem>
                </SelectContent>
              </Select>

              <div className="w-px h-6 bg-gray-200" />

              <Select
                value={searchParams.price}
                onValueChange={(value) => setSearchParams({ ...searchParams, price: value })}
              >
                <SelectTrigger className="w-[140px] border-0 bg-transparent focus:ring-0">
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-price">Any Price</SelectItem>
                  <SelectItem value="0-10000">$0 - $10,000</SelectItem>
                  <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                  <SelectItem value="20000-30000">$20,000 - $30,000</SelectItem>
                  <SelectItem value="30000-50000">$30,000 - $50,000</SelectItem>
                </SelectContent>
              </Select>

              <Button type="submit" size="icon" className="h-10 w-10 shrink-0 rounded-full bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Featured Car Image */}
          <div className="max-w-4xl absolute mx-auto sm: sm:-translate-y-1/4 left-0 right-0">
            <Image
              src={carfront}
              alt="Featured Car"
              className="w-full "
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Browse by Type Section */}
      <section className="container mx-auto px-4 pt-32">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Type</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {vehicleTypes.map((type) => (
            <div
              key={type.label}
              className="flex flex-col items-center rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer border py-10"
            >
              <type.icon size={32} className="h-8 w-8 mb-2 text-black" />
              <span className="text-lg font-medium">{type.label}</span>

            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="py-20 pl-20 pr-10 bg-blue-50 flex lg:flex-nowrap flex-wrap   items-end justify-between gap-20">
            <div>
              <h3 className="text-3xl font-bold mb-4 line-clamp-3">Are You Looking For a Car?</h3>
              <p className="text-gray-600 mb-6">
                We are committed to providing our customers with exceptional service.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                Get Started
                <MoveUpRight size={16} />

              </Button>
            </div>
            <Image src={van} alt="Car" width={100} height={100} />
          </Card>

          <Card className="py-20 pl-20 pr-10 bg-[#FFE9F3] flex lg:flex-nowrap flex-wrap items-end justify-between gap-20">
            <div >
              <h3 className="text-3xl line-clamp-2 font-bold mb-4">Do You Want to Sell a Car?</h3>
              <p className="text-gray-600 mb-6">
                We are committed to providing our customers with exceptional service.
              </p>
              <Button className="bg-black flex items-center gap-2">
                Get Started
                <MoveUpRight size={16} />
              </Button>
            </div>
            <Image src={car} alt="Car" width={100} height={100} />
          </Card>
        </div>

      </section>
      {/* Most Searched Cars */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">The Most Searched Cars</h2>

        {/* Car Type Filters */}
        <Tabs defaultValue={"SUV"} className="mb-12  bg-none flex flex-col gap-8">
          <TabsList className="flex justify-center  gap-8 border-b bg-white rounded-none">
            {tabs.map((type) => (
              <TabsTrigger
                key={type}
                value={type}
                onClick={() => handleTabClick(type)}
                className={`text-gray-600 rounded-none font-medium relative pb-2 ${activeTab === type ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'
                  }`}
              >
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
          <div>
            {tabs.map((type) => (
              <TabsContent key={type} value={type}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {carListings.map((car, index) => (
                    <CarCard car={car} key={index} />
                  ))}
                </div>

                {/* Pagination */}
                <PaginationCard />

              </TabsContent>
            ))}
          </div>
        </Tabs>

        <section className="container mx-auto px-4 py-16">
          {/* Why Choose Us */}
          <div className="bg-[#F9FBFC] p-16 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex-col gap-4">
                  <div className="inline-flex  items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                    <Image src={feature.icon} alt={feature.title} width={60} height={60} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Car Listings */}
      </section>
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carListings.map((car, index) => (
            <CarCard car={car} key={index} />
          ))}
        </div>

        {/* Pagination */}
        <PaginationCard />

      </section>

      {/* Review */}
      <Review />
      {/* Blog Post */}
      <BlogPost />
      {/* Latest Cars */}

      {/* Premium Brand */}
      <PremiumBrand />
      {/* Newsletter */}
      <Newsletter />
    </main>
  )
}