import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { CASH_OFFER_BENEFITS } from "@/lib/constants";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  propertyAddress: z.string().min(5, "Please enter a valid address"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function WeBuyHouses() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyAddress: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  
  const cashOfferRequest = useMutation({
    mutationFn: async (data: FormData) => {
      await apiRequest("POST", "/api/cash-offer-requests", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Request submitted successfully!",
        description: "We'll contact you soon about your property.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: FormData) => {
    cashOfferRequest.mutate(data);
  };
  
  return (
    <main>
      <Helmet>
        <title>We Buy Rural Houses | RuralHomes</title>
        <meta name="description" content="Get a fair cash offer for your rural property. No repairs needed, close on your timeline." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-neutral-100">
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Rural Home For Sale" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                We Buy Rural Houses
              </h1>
              <p className="text-white text-xl md:text-2xl mb-8">
                Get a fair cash offer for your country property
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-6">
                  Sell Your Rural Home Fast
                </h2>
                <p className="text-neutral-400 mb-6">
                  Looking to sell your country home quickly? We provide fair cash offers for rural properties of all types, 
                  including farmhouses, cabins, cottages, and country homes.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-neutral-500 mb-4">
                    Why Choose Our Cash Offer Program?
                  </h3>
                  <ul className="space-y-3">
                    {CASH_OFFER_BENEFITS.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check text-status-available mt-1 mr-2"></i>
                        <span className="text-neutral-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Card className="bg-neutral-100 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-500 mb-4">How It Works</h3>
                    <ol className="space-y-4">
                      <li className="flex">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">1</div>
                        <div>
                          <p className="font-semibold text-neutral-500">Submit Your Information</p>
                          <p className="text-neutral-400 text-sm">Fill out the form with your property details.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">2</div>
                        <div>
                          <p className="font-semibold text-neutral-500">Get Your Cash Offer</p>
                          <p className="text-neutral-400 text-sm">We'll evaluate your property and make a fair cash offer within 24-48 hours.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">3</div>
                        <div>
                          <p className="font-semibold text-neutral-500">Close On Your Timeline</p>
                          <p className="text-neutral-400 text-sm">Accept the offer and close when it's convenient for you, as quickly as 7 days.</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                {isSubmitted ? (
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="text-status-available text-6xl mb-6">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-500 mb-4">
                      Thanks for Your Submission!
                    </h3>
                    <p className="text-neutral-400 mb-6">
                      We've received your request for a cash offer. One of our representatives will contact you 
                      within 24 hours to discuss your property and provide a fair cash offer.
                    </p>
                    <div className="p-4 bg-neutral-100 rounded-lg inline-block">
                      <p className="text-neutral-500 font-semibold">
                        Have questions? Call us at
                      </p>
                      <p className="text-primary text-xl font-bold">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-neutral-500 mb-6">
                      Get Your Cash Offer
                    </h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="propertyAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="123 Rural Road, Town, State, ZIP"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="(555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="your@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Details (Optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us more about your property, its condition, why you're selling, etc."
                                  className="resize-none min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-secondary hover:bg-opacity-90 text-white py-3 text-lg font-semibold"
                          disabled={cashOfferRequest.isPending}
                        >
                          {cashOfferRequest.isPending ? (
                            <span className="flex items-center justify-center">
                              <i className="fas fa-spinner fa-spin mr-2"></i> Submitting...
                            </span>
                          ) : (
                            "Request Cash Offer"
                          )}
                        </Button>
                        
                        <p className="text-xs text-neutral-400 text-center">
                          By submitting, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
                        </p>
                      </form>
                    </Form>
                  </div>
                )}
                
                <div className="mt-8 bg-neutral-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-neutral-500 mb-3">
                    We Buy All Types of Rural Properties:
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span className="text-neutral-400">Farmhouses</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span className="text-neutral-400">Cabins</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span className="text-neutral-400">Country Estates</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span className="text-neutral-400">Rural Land</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span className="text-neutral-400">Cottages</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span className="text-neutral-400">Ranches</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-10 md:py-16 bg-neutral-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-8 text-center">
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-neutral-500 mb-4 italic">
                "I inherited a rural property that needed extensive repairs. RuralHomes made a fair cash offer and we closed within 10 days. The process was so simple."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3 flex items-center justify-center">
                  <i className="fas fa-user text-neutral-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-neutral-500">Robert M.</p>
                  <p className="text-sm text-neutral-400">Sold in Hillside</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <p className="text-neutral-500 mb-4 italic">
                "We needed to relocate quickly for work and couldn't wait for a traditional sale of our country home. The cash offer was fair and the closing was smooth."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3 flex items-center justify-center">
                  <i className="fas fa-user text-neutral-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-neutral-500">Sarah & David K.</p>
                  <p className="text-sm text-neutral-400">Sold in Oakridge</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-neutral-500 mb-4 italic">
                "After trying to sell our farmhouse for over a year with no success, we reached out to RuralHomes for a cash offer. Their offer was reasonable and we closed without any of the usual hassles."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3 flex items-center justify-center">
                  <i className="fas fa-user text-neutral-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-neutral-500">Maria L.</p>
                  <p className="text-sm text-neutral-400">Sold in Riverdale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
