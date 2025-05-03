import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMobile } from "@/hooks/use-mobile";
import { Property } from "@shared/schema";
import PropertyCard from "@/components/property/property-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { PROPERTY_TYPES, PROPERTY_STATUSES, BED_OPTIONS, BATH_OPTIONS, PRICE_RANGES } from "@/lib/constants";

export default function Properties() {
  const isMobile = useMobile();
  const [searchParams, setSearchParams] = useState({
    query: "",
    propertyType: "all",
    status: "available",
    minBeds: "",
    minBaths: "",
    minPrice: "",
    maxPrice: "",
    isRental: false,
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(!isMobile);
  
  // Get URL parameters on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q") || "";
    setSearchQuery(query);
    setSearchParams(prev => ({ ...prev, query }));
  }, []);
  
  // Construct query parameters
  const queryParams = new URLSearchParams();
  if (searchParams.query) queryParams.append("q", searchParams.query);
  if (searchParams.propertyType !== "all") queryParams.append("type", searchParams.propertyType);
  if (searchParams.status !== "all") queryParams.append("status", searchParams.status);
  if (searchParams.minBeds) queryParams.append("minBeds", searchParams.minBeds);
  if (searchParams.minBaths) queryParams.append("minBaths", searchParams.minBaths);
  if (searchParams.minPrice) queryParams.append("minPrice", searchParams.minPrice);
  if (searchParams.maxPrice && searchParams.maxPrice !== "any") queryParams.append("maxPrice", searchParams.maxPrice);
  queryParams.append("isRental", searchParams.isRental.toString());
  
  const { data: properties, isLoading, refetch } = useQuery<Property[]>({
    queryKey: [`/api/properties/search?${queryParams.toString()}`],
  });
  
  const handleSearch = () => {
    setSearchParams(prev => ({ ...prev, query: searchQuery }));
    refetch();
    
    // Update URL
    const url = new URL(window.location.href);
    url.searchParams.set("q", searchQuery);
    window.history.pushState({}, "", url.toString());
  };
  
  const handleFilterChange = (key: string, value: string | boolean) => {
    setSearchParams(prev => ({ ...prev, [key]: value }));
    // Don't refetch immediately to avoid too many requests
  };
  
  const applyFilters = () => {
    refetch();
  };
  
  const resetFilters = () => {
    setSearchParams({
      query: searchQuery,
      propertyType: "all",
      status: "available",
      minBeds: "",
      minBaths: "",
      minPrice: "",
      maxPrice: "",
      isRental: false,
    });
    refetch();
  };
  
  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };
  
  const renderSkeletons = () => {
    return Array(6).fill(0).map((_, index) => (
      <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
        <Skeleton className="w-full h-48" />
        <div className="p-4">
          <Skeleton className="h-7 w-1/3 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          <Skeleton className="h-4 w-full mb-4" />
          <div className="flex justify-between">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
      </div>
    ));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-neutral-500 mb-6">
        {searchParams.isRental ? "Rental Properties" : "Properties for Sale"}
      </h1>
      
      {/* Search and filter section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-grow">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by location, ZIP code, or property features"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
          <Button 
            onClick={handleSearch} 
            className="bg-primary text-white"
          >
            Search
          </Button>
          
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={toggleFilters}
          >
            <i className="fas fa-filter mr-2"></i>
            Filters
          </Button>
        </div>
        
        {/* Filters section */}
        <div className={`bg-white p-4 rounded-lg shadow-sm mb-6 ${filtersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500">Property Type</label>
              <Select 
                value={searchParams.propertyType} 
                onValueChange={(value) => handleFilterChange("propertyType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {PROPERTY_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500">Status</label>
              <Select 
                value={searchParams.status} 
                onValueChange={(value) => handleFilterChange("status", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {PROPERTY_STATUSES.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500">Bedrooms</label>
              <Select 
                value={searchParams.minBeds} 
                onValueChange={(value) => handleFilterChange("minBeds", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  {BED_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500">Bathrooms</label>
              <Select 
                value={searchParams.minBaths} 
                onValueChange={(value) => handleFilterChange("minBaths", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  {BATH_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-500">Price Range</label>
              <div className="grid grid-cols-2 gap-2">
                <Select 
                  value={searchParams.minPrice} 
                  onValueChange={(value) => handleFilterChange("minPrice", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Min" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">No Min</SelectItem>
                    {PRICE_RANGES.filter(p => p.value !== "any").map((price) => (
                      <SelectItem key={`min-${price.value}`} value={price.value}>
                        ${price.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select 
                  value={searchParams.maxPrice} 
                  onValueChange={(value) => handleFilterChange("maxPrice", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Max" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">No Max</SelectItem>
                    {PRICE_RANGES.map((price) => (
                      <SelectItem key={`max-${price.value}`} value={price.value}>
                        {price.value === "any" ? "Any" : `$${price.label}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-4 pt-4 border-t border-neutral-200">
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="isRental"
                checked={searchParams.isRental}
                onChange={(e) => handleFilterChange("isRental", e.target.checked)}
                className="rounded text-primary focus:ring-primary"
              />
              <label htmlFor="isRental" className="text-sm text-neutral-500">Show Rentals Only</label>
            </div>
            <div className="space-x-2">
              <Button variant="outline" onClick={resetFilters}>
                Reset
              </Button>
              <Button className="bg-primary text-white" onClick={applyFilters}>
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-neutral-500 mb-2">
          {isLoading ? "Loading properties..." : `${properties?.length || 0} Properties Found`}
        </h2>
      </div>
      
      {/* Properties grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {isLoading ? (
          renderSkeletons()
        ) : properties && properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full text-center p-8 bg-white rounded-lg">
            <div className="text-5xl text-neutral-300 mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-semibold text-neutral-500 mb-2">No Properties Found</h3>
            <p className="text-neutral-400 mb-4">
              Try adjusting your search criteria or filters to find more properties.
            </p>
            <Button variant="outline" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
