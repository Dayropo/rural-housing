import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import PropertyCard from "@/components/property/property-card";
import PropertyFilters from "@/components/property/property-filters";
import { Property } from "@shared/schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface PropertiesProps {
  initialQuery?: string;
  initialIsRental?: boolean;
}

export default function Properties({
  initialQuery = "",
  initialIsRental = false,
}: PropertiesProps) {
  const [filters, setFilters] = useState({
    query: initialQuery,
    propertyType: "all",
    minBeds: "0",
    minBaths: "0",
    minPrice: "0", 
    maxPrice: "any",
    isRental: initialIsRental,
  });
  
  // Construct query parameters
  const queryParams = new URLSearchParams();
  if (filters.query) queryParams.append("q", filters.query);
  if (filters.propertyType !== "all") queryParams.append("propertyType", filters.propertyType);
  if (filters.minBeds !== "0") queryParams.append("minBeds", filters.minBeds);
  if (filters.minBaths !== "0") queryParams.append("minBaths", filters.minBaths);
  if (filters.minPrice !== "0") queryParams.append("minPrice", filters.minPrice);
  if (filters.maxPrice !== "any") queryParams.append("maxPrice", filters.maxPrice);
  queryParams.append("isRental", String(filters.isRental));
  
  const { data: properties, isLoading, refetch } = useQuery<Property[]>({
    queryKey: [`/api/properties/search?${queryParams.toString()}`],
  });
  
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="container mx-auto px-4 mb-12">
      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Find Your Dream Rural Property</CardTitle>
          <CardDescription>
            Use the filters below to find properties that match your criteria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PropertyFilters 
            filters={filters} 
            onFilterChange={handleFilterChange} 
            onSearch={() => refetch()}
          />
        </CardContent>
      </Card>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="w-full h-48" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mb-3" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-1/4" />
                  <Skeleton className="h-8 w-1/4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : properties && properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center p-12 bg-neutral-100 rounded-lg">
          <div className="text-5xl text-neutral-300 mb-4">
            <i className="fas fa-home"></i>
          </div>
          <h3 className="text-xl font-bold text-neutral-500 mb-2">No Properties Found</h3>
          <p className="text-neutral-400 mb-6">
            Try adjusting your search filters to find more properties
          </p>
        </div>
      )}
    </div>
  );
}