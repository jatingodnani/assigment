"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, X } from "lucide-react";
import { Input } from "../ui/input";

interface FilterState {
  location: string;
  radius: string;
  condition: string[];
  type: string[];
  make: string;
  model: string;
  yearFrom: string;
  yearTo: string;
  mileage: string;
  driveType: string;
  priceRange: number[];
  transmission: string[];
  fuelType: string[];
  exteriorColor: string;
  interiorColor: string;
}

const initialState: FilterState = {
  location: "New York",
  radius: "200",
  condition: [],
  type: [],
  make: "",
  model: "",
  yearFrom: "2019",
  yearTo: "2023",
  mileage: "Any Mileage",
  driveType: "Any Type",
  priceRange: [5000, 45000],
  transmission: [],
  fuelType: [],
  exteriorColor: "Blue",
  interiorColor: "Black",
};

export function FilterSheet() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filters, setFilters] = React.useState<FilterState>(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item: string) => item !== value)
        : [...prev[key], value],
    }));
  };

  const clearFilters = () => {
    setFilters(initialState);
  };

  const applyFilters = async () => {
    setIsLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsOpen(false);
  };

  const FilterSection = ({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) => (
    <div className={`space-y-3 ${className}`}>
      <h3 className="font-medium text-sm">{title}</h3>
      {children}
    </div>
  );

  const FilterContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`space-y-6 border rounded-lg ${isMobile ? 'p-4' : 'p-4 md:p-6'}`}>
      <div className="space-y-6">
        <div className="grid grid-cols-1  gap-4 md:gap-6">
            <div className="relative p-4 border border-1 rounded-xl">
               
                <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
              <SelectTrigger className="w-full border-0 p-0 leading-0 h-4 focus:border-0 focus:ring-0 focus-visible:ring-0 ring-background-none">
              <div className="text-xs flex flex-col">
                    <span>Location</span>
                    <SelectValue placeholder="Select location" />
                </div>

              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                <SelectItem value="Chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>
            </div>
         
<div className="flex gap-2">
          
            <Select value={filters.radius} onValueChange={(value) => handleFilterChange("radius", value)}>
              <SelectTrigger className="w-full">
              <div className="text-xs flex flex-col">
              <span className="text-start">Search within</span>
                <SelectValue placeholder="Select radius" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50">50 miles</SelectItem>
                <SelectItem value="100">100 miles</SelectItem>
                <SelectItem value="200">200 miles</SelectItem>
              </SelectContent>
            </Select>
          
          <Input placeholder="zip code"/>
          </div>
        </div>

        <Separator className="my-6" />

        <FilterSection title="Vehicle Type">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {["SUV", "Sedan", "Hatchback", "Coupe", "Convertible"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`${type}-${isMobile ? 'mobile' : 'desktop'}`}
                  checked={filters.type.includes(type)}
                  onCheckedChange={() => handleCheckboxChange("type", type)}
                />
                <label htmlFor={`${type}-${isMobile ? 'mobile' : 'desktop'}`} className="text-sm">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </FilterSection>

        <Separator className="my-6" />

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <FilterSection >
            <Select value={filters.make} onValueChange={(value) => handleFilterChange("make", value)}>
          
              <SelectTrigger className="w-full">
              <div className="text-xs flex flex-col justify-start">
              <span className="text-start">Make</span>
                <SelectValue placeholder="Select make" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="audi">Audi</SelectItem>
              </SelectContent>
            </Select>
          </FilterSection>

          <FilterSection title="Price Range">
            <div className="px-2">
              <Slider
                value={filters.priceRange}
                min={0}
                max={100000}
                
                onValueChange={(value) => handleFilterChange("priceRange", value)}
                className="mt-6"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm">${filters.priceRange[0].toLocaleString()}</span>
                <span className="text-sm">${filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </FilterSection>
        </div>

        <Separator className="my-6" />

        <div className="grid grid-cols-1  gap-6">
          <FilterSection title="Transmission">
            <div className="grid grid-cols-2 gap-2">
              {["Automatic", "Manual", "CVT"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${type}-${isMobile ? 'mobile' : 'desktop'}`}
                    checked={filters.transmission.includes(type)}
                    onCheckedChange={() => handleCheckboxChange("transmission", type)}
                  />
                  <label htmlFor={`${type}-${isMobile ? 'mobile' : 'desktop'}`} className="text-sm">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Fuel Type">
            <div className="grid grid-cols-2 gap-2">
              {["Petrol", "Diesel", "Hybrid", "Electric"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${type}-${isMobile ? 'mobile' : 'desktop'}`}
                    checked={filters.fuelType.includes(type)}
                    onCheckedChange={() => handleCheckboxChange("fuelType", type)}
                  />
                  <label htmlFor={`${type}-${isMobile ? 'mobile' : 'desktop'}`} className="text-sm">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button variant="outline" onClick={clearFilters} className="flex-1">
          Clear All
        </Button>
        <Button onClick={applyFilters} className="flex-1" disabled={isLoading}>
          {isLoading ? "Applying..." : "Apply Filters"}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Sheet */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:max-w-lg">
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between">
                Filters
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                 
                </Button>
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
              <FilterContent isMobile={true} />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block w-80 shrink-0">
        <div className="sticky top-4 space-y-4">
          
          <FilterContent />
        </div>
      </div>
    </>
  );
}