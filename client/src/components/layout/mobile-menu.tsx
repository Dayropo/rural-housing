import { useEffect } from "react";
import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu on navigation
  const handleNavigation = () => {
    onClose();
  };

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className={`md:hidden bg-white border-t border-neutral-300 py-4 ${isOpen ? 'block' : 'hidden'}`}
      id="mobile-menu"
    >
      <div className="container mx-auto px-4 flex flex-col space-y-4">
        <Link href="/buy" onClick={handleNavigation} className="font-semibold text-neutral-500 hover:text-primary">
          Buy
        </Link>
        <Link href="/rent" onClick={handleNavigation} className="font-semibold text-neutral-500 hover:text-primary">
          Rent
        </Link>
        <Link href="/sell" onClick={handleNavigation} className="font-semibold text-neutral-500 hover:text-primary">
          Sell
        </Link>
        <Link href="/we-buy-houses" onClick={handleNavigation} className="font-semibold text-neutral-500 hover:text-primary">
          We Buy Houses
        </Link>
        <Link href="/rental-application" onClick={handleNavigation} className="font-semibold text-neutral-500 hover:text-primary">
          Rental Applications
        </Link>
        <div className="flex flex-col space-y-2 pt-2 border-t border-neutral-300">
          <button className="font-semibold text-neutral-500 hover:text-primary text-left">
            Sign In
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all text-left">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
