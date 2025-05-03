import { useState } from "react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Navigate to search results page with query
    navigate(`/buy?q=${encodeURIComponent(searchQuery)}`);
  };
  
  return (
    <section className="relative bg-neutral-100">
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
          alt="Rural Countryside Home" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Rural Property
            </h1>
            <p className="text-white text-xl md:text-2xl mb-8">
              Discover country homes, cabins, and farmland in your area
            </p>
            
            {/* Search Bar */}
            <form 
              onSubmit={handleSearch}
              className="bg-white rounded-lg shadow-lg p-2 md:p-4 max-w-3xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-grow mb-3 md:mb-0 md:mr-3 w-full">
                  <div className="relative">
                    <Input 
                      type="text" 
                      placeholder="Enter an address, city, or ZIP code" 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                </div>
                <Button 
                  type="submit"
                  className="bg-secondary hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold w-full md:w-auto"
                >
                  Search Properties
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
