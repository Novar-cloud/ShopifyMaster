import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  return (
    <Link href={href}>
      <a className={cn(
        "text-gray-800 hover:text-[#008060] transition-colors",
        isActive && "text-[#008060]"
      )}>
        {children}
      </a>
    </Link>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a className="text-2xl font-bold text-[#4A154B] flex items-center">
              <span className="mr-2">Nehal</span>
              <span className="text-[#008060] text-sm font-medium px-2 py-1 bg-[#008060]/10 rounded">Shopify Expert</span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#portfolio">Portfolio</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#testimonials">Testimonials</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-gray-800 hover:text-[#008060]"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#portfolio">Portfolio</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#testimonials">Testimonials</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>
        </div>
      )}
    </header>
  );
}
