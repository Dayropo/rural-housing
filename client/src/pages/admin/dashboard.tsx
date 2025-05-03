import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import AdminLayout from "@/components/admin/admin-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Property, CashOfferRequest, EmailSubscription } from "@shared/schema";

export default function Dashboard() {
  const { isAuthenticated, isAuthenticating } = useAuth();
  const [, navigate] = useLocation();
  
  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, isAuthenticating, navigate]);

  const { data: properties, isLoading: isLoadingProperties } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
    enabled: isAuthenticated,
  });

  const { data: cashOffers, isLoading: isLoadingCashOffers } = useQuery<CashOfferRequest[]>({
    queryKey: ["/api/cash-offer-requests"],
    enabled: isAuthenticated,
  });

  const { data: subscriptions, isLoading: isLoadingSubscriptions } = useQuery<EmailSubscription[]>({
    queryKey: ["/api/email-subscriptions"],
    enabled: isAuthenticated,
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
        <h1 className="text-3xl font-bold text-neutral-500 mb-6">Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Properties" 
            value={properties?.length || 0} 
            icon="fa-home"
            loading={isLoadingProperties}
            color="bg-primary/10"
            iconColor="text-primary"
          />
          <StatCard 
            title="Available Properties" 
            value={properties?.filter(p => p.status === "available").length || 0} 
            icon="fa-check-circle"
            loading={isLoadingProperties}
            color="bg-status-available/10"
            iconColor="text-status-available"
          />
          <StatCard 
            title="Cash Offer Requests" 
            value={cashOffers?.length || 0} 
            icon="fa-dollar-sign"
            loading={isLoadingCashOffers}
            color="bg-secondary/10"
            iconColor="text-secondary"
          />
          <StatCard 
            title="Email Subscribers" 
            value={subscriptions?.length || 0} 
            icon="fa-envelope"
            loading={isLoadingSubscriptions}
            color="bg-blue-500/10"
            iconColor="text-blue-500"
          />
        </div>
        
        <Tabs defaultValue="recent-listings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="recent-listings">Recent Listings</TabsTrigger>
            <TabsTrigger value="cash-offers">Cash Offer Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent-listings" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Property Listings</CardTitle>
                <CardDescription>
                  Manage your most recently added properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingProperties ? (
                  <div className="space-y-4">
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center">
                          <Skeleton className="h-12 w-12 rounded-md mr-4" />
                          <div>
                            <Skeleton className="h-5 w-40 mb-2" />
                            <Skeleton className="h-4 w-60" />
                          </div>
                        </div>
                        <Skeleton className="h-9 w-20" />
                      </div>
                    ))}
                  </div>
                ) : properties && properties.length > 0 ? (
                  <div className="space-y-1">
                    {properties.slice(0, 5).map((property) => (
                      <div key={property.id} className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-md">
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-md bg-neutral-100 mr-4 overflow-hidden">
                            {property.featuredImage ? (
                              <img 
                                src={property.featuredImage} 
                                alt={property.title} 
                                className="h-full w-full object-cover" 
                              />
                            ) : (
                              <div className="h-full w-full flex items-center justify-center text-neutral-400">
                                <i className="fas fa-home"></i>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{property.title}</p>
                            <p className="text-sm text-neutral-400">{`${property.address}, ${property.city}, ${property.state}`}</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => navigate(`/admin/properties/${property.id}/edit`)}
                        >
                          Edit
                        </Button>
                      </div>
                    ))}
                    <div className="flex justify-center pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => navigate("/admin/properties")}
                      >
                        View All Properties
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="text-4xl text-neutral-300 mb-3">
                      <i className="fas fa-home"></i>
                    </div>
                    <p className="text-neutral-500 mb-4">No properties found</p>
                    <Button onClick={() => navigate("/admin/properties/new")}>
                      Add New Property
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cash-offers" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Cash Offer Requests</CardTitle>
                <CardDescription>
                  Review and process "We Buy Houses" submissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingCashOffers ? (
                  <div className="space-y-4">
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border-b">
                        <div>
                          <Skeleton className="h-5 w-40 mb-2" />
                          <Skeleton className="h-4 w-60" />
                        </div>
                        <Skeleton className="h-6 w-24" />
                      </div>
                    ))}
                  </div>
                ) : cashOffers && cashOffers.length > 0 ? (
                  <div className="space-y-1">
                    {cashOffers.slice(0, 5).map((offer) => (
                      <div key={offer.id} className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-md">
                        <div>
                          <p className="font-medium">{offer.name}</p>
                          <p className="text-sm text-neutral-400">{offer.propertyAddress}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            offer.status === "new" ? "bg-blue-100 text-blue-800" :
                            offer.status === "contacted" ? "bg-yellow-100 text-yellow-800" :
                            offer.status === "in_progress" ? "bg-purple-100 text-purple-800" :
                            offer.status === "completed" ? "bg-green-100 text-green-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {offer.status.replace("_", " ")}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-neutral-500"
                          >
                            <i className="fas fa-ellipsis-h"></i>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="text-4xl text-neutral-300 mb-3">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <p className="text-neutral-500">No cash offer requests found</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: string;
  loading?: boolean;
  color?: string;
  iconColor?: string;
}

function StatCard({ title, value, icon, loading = false, color = "bg-primary/10", iconColor = "text-primary" }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-400 mb-1">{title}</p>
            {loading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <p className="text-2xl font-bold text-neutral-500">{value}</p>
            )}
          </div>
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center ${iconColor}`}>
            <i className={`fas ${icon} text-lg`}></i>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
