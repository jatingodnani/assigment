"use client";

import { ChevronDown, Phone, Smartphone, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
const navLinks = [
    { label: "Home", href: "#", hasDropdown: true },
    { label: "Inventory", href: "#", hasDropdown: true },
    { label: "Blog", href: "#", hasDropdown: true },
    { label: "Shop", href: "#", hasDropdown: true },
    { label: "Pages", href: "#", hasDropdown: true },
    { label: "Contact", href: "#", hasDropdown: false },
  ];
function Navbar() {
  return (
    <header className="border-b h-[87px] px-4 py-4 flex items-center justify-center">
      <div className="container flex items-center justify-between gap-8">
        <div className="flex items-center justify-between flex-1">
          <h1 className="text-xl font-bold">BOXCARS</h1>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:text-blue-600 flex items-center"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={16} className="inline-block ml-1" />}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <div className="hidden md:flex items-center">
            <Smartphone className="h-4 w-4 mr-2" />
            <span className="text-sm">+75 955 04 4542</span>
          </div>
          <Button variant="outline" className="hidden border-0 md:inline-flex md:gap-[9px]">
            <User size={16} />
            Sign in
          </Button>
          <Button variant="outline">Add Listing</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

