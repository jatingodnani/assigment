import { Search, Car, CarFront, Truck, Zap, Fuel, GaugeCircle, BookmarkPlus, MoveUpRight, ChevronRight } from "lucide-react"
import choose1 from "../public/images/Group (1).svg";
import choose2 from "../public/images/Group (2).svg";
import choose3 from "../public/images/tag (1) 1.svg";
import choose4 from "../public/images/price-tag (1) 1.svg";
export const vehicleTypes = [
    { icon: Car, label: "SUV", count: "90" },
    { icon: CarFront, label: "Sedan", count: "120" },
    { icon: Car, label: "Hatchback", count: "70" },
    { icon: Car, label: "Coupe", count: "45" },
    { icon: Car, label: "Hybrid", count: "60" },
    { icon: Car, label: "Convertible", count: "30" },
    { icon: Truck, label: "Van", count: "25" },
    { icon: Truck, label: "Truck", count: "40" },
    { icon: Zap, label: "Electric", count: "35" },
  ]
  
  export const carListings = [
    {
      id: 1,
      badge: "Low Mileage",
      badgeColor: "bg-blue-600",
      name: "Mercedes-Benz C Class",
      model: "2023 C300e AMG Line Night Ed Premium Plus",
      mileage: "72,925",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "399",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Mercedes-Benz C Class",
      model: "2023 C300e AMG Line Night Ed Premium Plus",
      mileage: "72,925",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "399",
      image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      badge: "Great Price",
      badgeColor: "bg-green-600",
      name: "Mercedes-Benz C Class",
      model: "2023 C300e AMG Line Night Ed Premium Plus",
      mileage: "72,925",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "399",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Mercedes-Benz C Class",
      model: "2023 C300e AMG Line Night Ed Premium Plus",
      mileage: "72,925",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "399",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800"
    },
  ]
  
 export  const features = [
    {
      icon: choose1,
      title: "Special Financing Offers",
      description: "Our stress-free finance department that can find financial solutions to save you money."
    },
    {
      icon: choose2,
      title: "Trusted Car Dealership",
      description: "Our stress-free finance department that can find financial solutions to save you money."
    },
    {
      icon: choose3,
      title: "Transparent Pricing",
      description: "Our stress-free finance department that can find financial solutions to save you money."
    },
    {
      icon: choose4,
      title: "Expert Car Service",
      description: "Our stress-free finance department that can find financial solutions to save you money."
    },
  ]