import { Property } from "@shared/schema";
import { formatPrice } from "@/lib/utils";

interface PropertyDetailsContentProps {
  property: Property;
}

export default function PropertyDetailsContent({ property }: PropertyDetailsContentProps) {
  return (
    <div className="space-y-8">
      {/* Property Overview */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-500 mb-4">Property Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-neutral-100 p-4 rounded-lg text-center">
            <span className="block text-sm text-neutral-400">Bedrooms</span>
            <div className="mt-1 flex justify-center items-center text-primary">
              <i className="fas fa-bed mr-2"></i>
              <span className="text-xl font-bold text-neutral-500">{property.bedrooms}</span>
            </div>
          </div>
          
          <div className="bg-neutral-100 p-4 rounded-lg text-center">
            <span className="block text-sm text-neutral-400">Bathrooms</span>
            <div className="mt-1 flex justify-center items-center text-primary">
              <i className="fas fa-bath mr-2"></i>
              <span className="text-xl font-bold text-neutral-500">{property.bathrooms}</span>
            </div>
          </div>
          
          <div className="bg-neutral-100 p-4 rounded-lg text-center">
            <span className="block text-sm text-neutral-400">Square Feet</span>
            <div className="mt-1 flex justify-center items-center text-primary">
              <i className="fas fa-ruler-combined mr-2"></i>
              <span className="text-xl font-bold text-neutral-500">{property.squareFeet.toLocaleString()}</span>
            </div>
          </div>
          
          {property.acres && (
            <div className="bg-neutral-100 p-4 rounded-lg text-center">
              <span className="block text-sm text-neutral-400">Lot Size</span>
              <div className="mt-1 flex justify-center items-center text-primary">
                <i className="fas fa-tree mr-2"></i>
                <span className="text-xl font-bold text-neutral-500">{property.acres} acres</span>
              </div>
            </div>
          )}
          
          {property.yearBuilt && (
            <div className="bg-neutral-100 p-4 rounded-lg text-center">
              <span className="block text-sm text-neutral-400">Year Built</span>
              <div className="mt-1 flex justify-center items-center text-primary">
                <i className="fas fa-calendar-alt mr-2"></i>
                <span className="text-xl font-bold text-neutral-500">{property.yearBuilt}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-500 mb-4">Description</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-neutral-400 whitespace-pre-line">{property.description}</p>
        </div>
      </div>
      
      {/* Property Details */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-500 mb-4">Property Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <dt className="text-sm text-neutral-400">Property Type</dt>
              <dd className="mt-1 text-neutral-500 font-medium">
                {property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}
              </dd>
            </div>
            
            <div>
              <dt className="text-sm text-neutral-400">Status</dt>
              <dd className="mt-1">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  property.status === "available" ? "bg-status-available text-white" :
                  property.status === "pending" ? "bg-status-pending text-white" :
                  "bg-status-unavailable text-white"
                }`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </span>
              </dd>
            </div>
            
            <div>
              <dt className="text-sm text-neutral-400">Price</dt>
              <dd className="mt-1 text-neutral-500 font-medium">
                {property.isRental ? `${formatPrice(property.rentalPrice)}/month` : formatPrice(property.price)}
              </dd>
            </div>
            
            <div>
              <dt className="text-sm text-neutral-400">Address</dt>
              <dd className="mt-1 text-neutral-500 font-medium">
                {property.address}, {property.city}, {property.state} {property.zipCode}
              </dd>
            </div>
            
            <div>
              <dt className="text-sm text-neutral-400">Bedrooms</dt>
              <dd className="mt-1 text-neutral-500 font-medium">{property.bedrooms}</dd>
            </div>
            
            <div>
              <dt className="text-sm text-neutral-400">Bathrooms</dt>
              <dd className="mt-1 text-neutral-500 font-medium">{property.bathrooms}</dd>
            </div>
            
            <div>
              <dt className="text-sm text-neutral-400">Square Feet</dt>
              <dd className="mt-1 text-neutral-500 font-medium">{property.squareFeet.toLocaleString()}</dd>
            </div>
            
            {property.acres && (
              <div>
                <dt className="text-sm text-neutral-400">Lot Size</dt>
                <dd className="mt-1 text-neutral-500 font-medium">{property.acres} acres</dd>
              </div>
            )}
            
            {property.yearBuilt && (
              <div>
                <dt className="text-sm text-neutral-400">Year Built</dt>
                <dd className="mt-1 text-neutral-500 font-medium">{property.yearBuilt}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
      
      {/* Location */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-500 mb-4">Location</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center p-8 bg-neutral-100 rounded-lg">
            <div className="text-4xl text-neutral-300 mb-3">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="text-neutral-500 mb-1">
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </p>
            <p className="text-sm text-neutral-400">
              Map view is not available in this preview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
