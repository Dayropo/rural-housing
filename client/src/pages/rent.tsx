import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import Properties from "@/components/property/properties";

export default function Rent() {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1] || "");
  const searchQuery = params.get("q") || "";

  return (
    <main>
      <Helmet>
        <title>Rent Rural Properties | RuralHomes</title>
        <meta name="description" content="Find and rent rural properties, farmhouses, cabins, and country homes." />
      </Helmet>
      
      <div className="bg-primary py-8 md:py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Rural Properties for Rent
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90">
            Discover countryside cabins, farmhouses, and homes available for rent
          </p>
        </div>
      </div>
      
      <Properties initialQuery={searchQuery} initialIsRental={true} />
    </main>
  );
}
