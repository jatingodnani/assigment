import React from 'react'
import { Card } from '../ui/card'
import { BookmarkPlus, Car, Fuel, GaugeCircle, MoveUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

function CarCard({car,className}:{car:any,className?:string}) {
  return (
    <Card key={car.id} className={cn(`overflow-hidden text-white bg-[#050B20],${className}`)}>
    <div className="relative">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      {car.badge && (
        <span className={`absolute top-3 left-3 ${car.badgeColor} text-white text-xs px-3 py-1 rounded-full`}>
          {car.badge}
        </span>
      )}
      <button className="absolute top-3 right-3 p-2 bg-white text-black rounded-full hover:bg-gray-100">
        <BookmarkPlus className="h-4 w-4" />
      </button>
    </div>
    <div className="p-4">
      <h3 className="font-bold mb-1">{car.name}</h3>
      <p className="text-sm text-gray-500 mb-4 truncate">{car.model}</p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col items-center text-center">
          <GaugeCircle className="h-5 w-5 text-gray-400 mb-1" />
          <span className="text-xs">{car.mileage} miles</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Fuel className="h-5 w-5 text-gray-400 mb-1" />
          <span className="text-xs">{car.fuel}</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Car className="h-5 w-5 text-gray-400 mb-1" />
          <span className="text-xs">{car.transmission}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-500 line-through">$289</span>
          <p className="text-lg font-bold">${car.price}</p>
        </div>
        <Button  className=" bg-transparent text-sm flex items-center gap-2 text-blue-500">
         
          View Details
          <MoveUpRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </Card>
  )
}

export default CarCard
