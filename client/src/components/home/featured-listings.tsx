import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/property/property-card";
import { Property } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedListings() {
  const { data: properties, isLoading, error } = useQuery<Property[]>({
    queryKey: ["/api/properties/featured"],
  });

  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, index) => (
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
    <section className="py-10 md:py-16 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-500">
            Featured Rural Properties
          </h2>
          <Link href="/buy">
            <a className="text-primary font-semibold hover:underline hidden md:inline-block">
              View all properties
            </a>
          </Link>
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            renderSkeletons()
          ) : error ? (
            <div className="col-span-full text-center p-8 bg-white rounded-lg">
              <p className="text-red-500 mb-2">Failed to load properties</p>
              <Button variant="secondary" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : properties && properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full text-center p-8 bg-white rounded-lg">
              <p className="text-neutral-400 mb-2">No featured properties available at the moment</p>
              <p className="text-neutral-400">Check back soon or browse all our listings</p>
              <Link href="/buy">
                <Button className="mt-4 bg-primary text-white">Browse All Properties</Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile View All Link */}
        <div className="mt-6 text-center md:hidden">
          <Link href="/buy">
            <a className="text-primary font-semibold hover:underline">
              View all properties
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
