import { useState, useEffect } from "react";
import { PROPERTY_TYPES, BED_OPTIONS, BATH_OPTIONS, PRICE_RANGES, RENTAL_PRICE_RANGES } from "@/lib/constants";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Search, X } from "lucide-react";

interface PropertyFiltersProps {
  filters: {
    query: string;
    propertyType: string;
    minBeds: string;
    minBaths: string;
    minPrice: string;
    maxPrice: string;
    isRental: boolean;
  };
  onFilterChange: (filters: PropertyFiltersProps["filters"]) => void;
  onSearch: () => void;
  compact?: boolean;
}

export default function PropertyFilters({ 
  filters, 
  onFilterChange, 
  onSearch,
  compact = false
}: PropertyFiltersProps) {
  // Local state for form inputs
  const [localFilters, setLocalFilters] = useState(filters);
  
  // Update local state when props change
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRentalToggle = (checked: boolean) => {
    setLocalFilters(prev => ({ ...prev, isRental: checked }));
  };
  
  const handleReset = () => {
    const resetFilters = {
      ...filters,
      query: "",
      propertyType: "all",
      minBeds: "0",
      minBaths: "0",
      minPrice: "0",
      maxPrice: "any",
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(localFilters);
    onSearch();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
              placeholder="Search by location, address, or keyword..."
              className="pl-9"
              name="query"
              value={localFilters.query}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="w-full md:w-40">
            <Select
              value={localFilters.propertyType}
              onValueChange={(value) => handleSelectChange("propertyType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {PROPERTY_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full md:w-auto">
            Search
          </Button>
        </div>
        
        {!compact && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div>
              <Select
                value={localFilters.minBeds}
                onValueChange={(value) => handleSelectChange("minBeds", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Beds" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Any Beds</SelectItem>
                  {BED_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select
                value={localFilters.minBaths}
                onValueChange={(value) => handleSelectChange("minBaths", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Baths" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Any Baths</SelectItem>
                  {BATH_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select
                value={localFilters.minPrice}
                onValueChange={(value) => handleSelectChange("minPrice", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Min Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No Min</SelectItem>
                  {(localFilters.isRental ? RENTAL_PRICE_RANGES : PRICE_RANGES).map((option) => (
                    option.value !== "any" && (
                      <SelectItem key={option.value} value={option.value}>
                        {localFilters.isRental ? `$${option.label}/mo` : `$${option.label}`}
                      </SelectItem>
                    )
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select
                value={localFilters.maxPrice}
                onValueChange={(value) => handleSelectChange("maxPrice", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Max Price" />
                </SelectTrigger>
                <SelectContent>
                  {(localFilters.isRental ? RENTAL_PRICE_RANGES : PRICE_RANGES).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.value === "any" 
                        ? "No Max" 
                        : localFilters.isRental 
                          ? `$${option.label}/mo` 
                          : `$${option.label}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="rental-toggle"
                  checked={localFilters.isRental}
                  onCheckedChange={handleRentalToggle}
                />
                <Label htmlFor="rental-toggle">Rentals Only</Label>
              </div>
              
              <Button 
                type="button" 
                variant="ghost" 
                size="sm" 
                onClick={handleReset}
                className="text-neutral-400 hover:text-neutral-500"
              >
                <X className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}