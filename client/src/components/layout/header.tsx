import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path 
      ? "font-semibold text-primary" 
      : "font-semibold text-neutral-500 hover:text-primary";
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-300 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <div className="text-primary font-bold text-2xl flex items-center">
                  <i className="fas fa-home mr-2"></i>
                  <span>RuralHomes</span>
                </div>
              </a>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/buy">
              <a className={isActive("/buy")}>Buy</a>
            </Link>
            <Link href="/rent">
              <a className={isActive("/rent")}>Rent</a>
            </Link>
            <Link href="/sell">
              <a className={isActive("/sell")}>Sell</a>
            </Link>
            <Link href="/we-buy-houses">
              <a className={isActive("/we-buy-houses")}>We Buy Houses</a>
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:block font-semibold text-neutral-500 hover:text-primary"
            >
              Sign In
            </Button>
            <Button 
              className="hidden md:block bg-primary text-white hover:bg-opacity-90 transition-all"
            >
              Sign Up
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              className="md:hidden text-neutral-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
