import { Button } from "@/components/ui/button";
import { ArrowRight, MoveUp, MoveUpRight } from "lucide-react";
import logo from "../../public/images/logo.svg"
import Image from "next/image";
export default function PremiumBrand() {
  return (
    <main className="rounded-xl mx-4 bg-[#F9FBFC]">
      <div className="container mx-auto px-4 py-12 flex items-center justify-around w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            <h1 className="text-[40px] sm:text-5xl font-bold tracking-tight">
              Explore Our Premium Brands
            </h1>
            <p className="text-[15px] text-muted-foreground max-w-[500px]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
            </p>
        <Button className="group bg-[#405FF2]" size="lg">
              Show All Brands
              <MoveUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right side floating brands */}
          </div>
          <div>
            <Image
              src={logo}
              alt="Brands"
              className="w-full h-full object-contain"
              height={500}
                width={500}
            />
          </div>
      </div>
    </main>
  );
}