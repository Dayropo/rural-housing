import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import Properties from "@/components/property/properties";

export default function Buy() {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1] || "");
  const searchQuery = params.get("q") || "";

  return (
    <main>
      <Helmet>
        <title>Buy Rural Homes | RuralHomes</title>
        <meta name="description" content="Find and buy rural properties, farmhouses, cabins, and country homes." />
      </Helmet>
      
      <div className="bg-primary py-8 md:py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your Perfect Rural Property
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90">
            Discover country homes, cabins, and land for sale in your desired location
          </p>
        </div>
      </div>
      
      <Properties initialQuery={searchQuery} initialIsRental={false} />
    </main>
  );
}
