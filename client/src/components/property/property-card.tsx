import { useState } from "react";
import { Link } from "wouter";
import { Property } from "@shared/schema";
import { formatPrice, getTimeAgo, truncateText } from "@/lib/utils";
import PropertyStatusBadge from "./property-status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  const getListingTime = () => {
    if (!property.createdAt) return "";
    
    try {
      return `Listed ${getTimeAgo(new Date(property.createdAt))}`;
    } catch {
      return "";
    }
  };
  
  const getPropertyLink = () => {
    return `/properties/${property.id}`;
  };
  
  const price = property.isRental ? 
    `${formatPrice(property.rentalPrice)}/mo` : 
    formatPrice(property.price);
  
  const mainImage = property.featuredImage || 
    (property.images && property.images.length > 0 ? property.images[0].imageUrl : "");
  
  return (
    <Card className="bg-white rounded-lg shadow hover:shadow-md transition-all overflow-hidden">
      <div className="relative">
        <div className="absolute top-3 left-3 z-10">
          <PropertyStatusBadge status={property.status} />
        </div>
        <Link href={getPropertyLink()}>
          <a>
            <img 
              src={mainImage || "https://via.placeholder.com/600x400?text=No+Image+Available"}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
          </a>
        </Link>
        <div className="absolute bottom-3 right-3 z-10">
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleFavorite}
            className="bg-white rounded-full p-2 shadow hover:bg-neutral-100"
          >
            {isFavorite ? (
              <i className="fas fa-heart text-red-500"></i>
            ) : (
              <i className="far fa-heart text-neutral-500"></i>
            )}
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-neutral-500">{price}</h3>
          <div className="flex items-center text-sm">
            <i className="fas fa-bed text-neutral-400 mr-1"></i>
            <span className="text-neutral-400">{property.bedrooms}</span>
            <i className="fas fa-bath text-neutral-400 mx-2"></i>
            <span className="text-neutral-400">{property.bathrooms}</span>
            <i className="fas fa-ruler-combined text-neutral-400 mx-2"></i>
            <span className="text-neutral-400">{property.squareFeet} sqft</span>
          </div>
        </div>
        <p className="text-neutral-400 text-sm mb-2">
          {`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
        </p>
        <p className="text-neutral-400 mb-4">
          {truncateText(property.description, 100)}
        </p>
        <div className="flex justify-between">
          <Link href={getPropertyLink()}>
            <a className="text-primary font-semibold hover:underline">
              {property.status === "rented" || property.status === "sold" 
                ? "View details" 
                : "View details"}
            </a>
          </Link>
          <span className="text-neutral-400 text-sm">{getListingTime()}</span>
        </div>
      </CardContent>
    </Card>
  );
}
