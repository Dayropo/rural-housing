import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Property } from "@shared/schema";
import ImageGallery from "@/components/ui/image-gallery";
import PropertyStatusBadge from "@/components/property/property-status-badge";
import PropertyDetailsContent from "@/components/property/property-details-content";
import PropertyContactForm from "@/components/property/property-contact-form";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

interface PropertyDetailProps {
  id: string;
}

export default function PropertyDetail({ id }: PropertyDetailProps) {
  const [, setLocation] = useLocation();
  const propertyId = parseInt(id);

  const { data: property, isLoading, error } = useQuery<Property>({
    queryKey: [`/api/properties/${propertyId}`],
  });

  // If invalid ID, redirect to 404
  useEffect(() => {
    if (isNaN(propertyId)) {
      setLocation("/not-found");
    }
  }, [propertyId, setLocation]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Results
          </Button>
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-6 w-1/3" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="w-full h-[400px] mb-6 rounded-lg" />
            <Skeleton className="h-8 w-1/3 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4 mb-6" />
            
            <Skeleton className="h-8 w-1/4 mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Array(4).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-24 rounded-lg" />
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="w-full h-[300px] rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
          <div className="text-5xl text-red-500 mb-4">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <h1 className="text-2xl font-bold text-neutral-500 mb-4">
            Property Not Found
          </h1>
          <p className="text-neutral-400 mb-6">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/buy">
              <Button>Browse Properties</Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const price = property.isRental ? 
    `${formatPrice(property.rentalPrice)}/mo` : 
    formatPrice(property.price);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-4"
        onClick={() => window.history.back()}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Results
      </Button>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-500 mb-2">
            {property.title}
          </h1>
          <p className="text-xl text-neutral-400">
            {`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
          </p>
        </div>
        <div className="flex items-center">
          <PropertyStatusBadge status={property.status} className="mr-3" />
          <span className="text-2xl font-bold text-neutral-500">{price}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="mb-8">
            <ImageGallery 
              images={property.images || []} 
              className="rounded-lg overflow-hidden"
            />
          </div>

          {/* Property Details */}
          <PropertyDetailsContent property={property} />
        </div>

        {/* Contact Form */}
        <div>
          <PropertyContactForm property={property} />
        </div>
      </div>

      {/* Similar Properties */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-500 mb-6">
          Similar Properties
        </h2>
        {/* This would be implemented with a query for similar properties */}
        <div className="p-8 bg-neutral-100 rounded-lg text-center">
          <p className="text-neutral-400">
            We're finding similar properties for you. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}
