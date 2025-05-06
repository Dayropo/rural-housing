import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import AdminLayout from "@/components/admin/admin-layout";
import PropertyForm from "@/components/admin/property-form";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft } from "lucide-react";
import { RouteComponentProps } from "wouter";
import { useEffect } from "react";
import { Property } from "@shared/schema";

// Define a type for the route parameters
type EditPropertyParams = {
  id: string;
};

// Extend RouteComponentProps with the specific params type
interface EditPropertyProps extends RouteComponentProps<EditPropertyParams> {
  id?: string;
}

export default function EditProperty(props: EditPropertyProps) {
  const { isAuthenticated, isAuthenticating } = useAuth();
  const [, navigate] = useLocation();
  const id = props.id || props.params?.id;
  const isNewProperty = !id;
  
  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, isAuthenticating, navigate]);
  
  const propertyId = id ? parseInt(id) : undefined;
  
  const { data: property, isLoading } = useQuery<Property>({
    queryKey: propertyId ? [`/api/properties/${propertyId}`] : ['empty-property'],
    queryFn: async () => {
      if (!propertyId) {
        return {
          id: 0,
          title: '',
          address: '',
          createdAt: new Date(),
          updatedAt: new Date(),
          status: 'available',
          city: '',
          state: '',
          zipCode: '',
          price: 0,
          bedrooms: 0,
          bathrooms: 0,
          squareFeet: 0,
          description: '',
          propertyType: '',
          yearBuilt: 0,
          lotSize: 0,
          featured: false,
          location: '',
          type: '',
          slug: '',
          displayOnHomepage: false,
          isRental: false,
          rentalPrice: 0,
          featuredImage: '',
          createdById: 0,
          acres: ''
        } as Property;
      }
      const response = await fetch(`/api/properties/${propertyId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch property');
      }
      return response.json();
    },
    enabled: isAuthenticated && (!!propertyId || isNewProperty),
  });
  
  if (isAuthenticating) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-neutral-500">Checking authentication...</p>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <AdminLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/admin/properties")}
            className="mb-2"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Button>
          <h1 className="text-3xl font-bold text-neutral-500">
            {isNewProperty ? "Add New Property" : "Edit Property"}
          </h1>
        </div>
        
        {isNewProperty ? (
          <PropertyForm />
        ) : isLoading ? (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <Skeleton className="h-8 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        ) : property ? (
          <PropertyForm property={property} />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-5xl text-red-500 mb-4">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h2 className="text-xl font-bold text-neutral-500 mb-4">
              Property Not Found
            </h2>
            <p className="text-neutral-400 mb-6">
              The property you're trying to edit doesn't exist or has been deleted.
            </p>
            <Button onClick={() => navigate("/admin/properties")}>
              Return to Property Management
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
