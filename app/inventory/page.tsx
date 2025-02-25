import CarCard from "@/components/compo/CarCard";
import { FilterSheet } from "@/components/compo/filter-component";


  const carListings={
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
    }
  



export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="md:text-3xl text-lg font-bold mb-6">New and Used Cars For Sale</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <FilterSheet />
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm sm:line-clamp-1 line-clamp-2 text-muted-foreground">
              Showing 1 to 16 of 1559 vehicles
            </p>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center">
           
           {Array.from({ length: 6 }).map((_, i) => (
           <CarCard className="bg-white text-black " car={carListings} key={i}/>
           ))}
         </div>
        </div>
      </div>
    </div>
  );
}