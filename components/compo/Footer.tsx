"use client";

import { Separator } from "@/components/ui/separator";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import exp from "node:constants";
const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Finance", href: "/finance" },
    { label: "Contact Us", href: "/contact" },
  ];
  
  const quickLinks = [
    { label: "Get in Touch", href: "/touch" },
    { label: "Help Center", href: "/help" },
    { label: "Live Chat", href: "/live-chat" },
    { label: "How it Works", href: "/how-it-works" },
  ];
  
  const brands = [
    { label: "Aston Martin", href: "/brands/aston-martin" },
    { label: "Audi", href: "/brands/audi" },
    { label: "Bentley", href: "/brands/bentley" },
    { label: "BMW", href: "/brands/bmw" },
    { label: "Bugatti", href: "/brands/bugatti" },
    { label: "Ferrari", href: "/brands/ferrari" },
    { label: "Jaguar", href: "/brands/jaguar" },
    { label: "Lamborghini", href: "/brands/lamborghini" },
  ];
  
  const vehicleTypes = [
    { label: "Pickup", href: "/types/pickup" },
    { label: "Coupe", href: "/types/coupe" },
    { label: "Family MPV", href: "/types/family-mpv" },
    { label: "Sedan", href: "/types/sedan" },
    { label: "SUV", href: "/types/suv" },
    { label: "Sport Coupe", href: "/types/sport-coupe" },
    { label: "Convertible", href: "/types/convertible" },
    { label: "Wagon", href: "/types/wagon" },
  ];
  
  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: <Facebook className="h-5 w-5" /> },
    { label: "Twitter", href: "https://twitter.com", icon: <Twitter className="h-5 w-5" /> },
    { label: "Instagram", href: "https://instagram.com", icon: <Instagram className="h-5 w-5" /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" /> },
  ];
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-white px-8">
        <div className="max-w-[var(--content-width)] mx-auto border-t border-border" />
        <div className="max-w-[var(--content-width)] mx-auto py-12 text-black">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 justify-around">
            {/* Company Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Quick Links Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Our Brands Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Brands</h3>
              <ul className="space-y-2">
                {brands.map((brand) => (
                  <li key={brand.label}>
                    <Link href={brand.href} className="text-muted-foreground hover:text-primary">
                      {brand.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Vehicle Type Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Vehicle Type</h3>
              <ul className="space-y-2">
                {vehicleTypes.map((type) => (
                  <li key={type.label}>
                    <Link href={type.href} className="text-muted-foreground hover:text-primary">
                      {type.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Sale Hours & Connect Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Sale Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Monday - Friday: 09:00AM - 09:00PM</li>
                  <li>Saturday: 09:00AM - 07:00PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
  
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Adjusted Upper Border */}
        
  
        {/* Bottom Section */}
        <div className=" border-t  w-full px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <p>© {currentYear} BoxsCars.com. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
              <span className="w-1 h-1 rounded-full bg-black"></span>
              <Link href="/privacy" className="hover:text-primary">Privacy Notice</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;