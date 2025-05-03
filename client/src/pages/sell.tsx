import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  propertyAddress: z.string().min(5, "Property address is required"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Sell() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyAddress: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // In a real application, this would send the data to the server
    console.log(data);
    setIsSubmitted(true);
  }

  return (
    <main>
      <Helmet>
        <title>Sell Your Rural Property | RuralHomes</title>
        <meta name="description" content="List your rural property, farmhouse, cabin, or country home for sale." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-neutral-100">
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Rural Home For Sale" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                Sell Your Rural Property
              </h1>
              <p className="text-white text-xl md:text-2xl mb-8">
                Get your property in front of motivated buyers
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Options Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-8 text-center">
            Choose How You Want to Sell
          </h2>
          
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="list">List Your Property</TabsTrigger>
              <TabsTrigger value="cash">Get a Cash Offer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-neutral-500 mb-4">
                      Why List with RuralHomes?
                    </h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span className="text-neutral-400">Reach thousands of motivated rural property buyers</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span className="text-neutral-400">Professional photography and virtual tours</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span className="text-neutral-400">Dedicated listing agent familiar with rural properties</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span className="text-neutral-400">Marketing specifically targeting country home buyers</span>
                      </li>
                    </ul>
                    
                    {isSubmitted ? (
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-status-available text-4xl mb-2">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <h4 className="font-semibold mb-2">Thank you!</h4>
                        <p className="text-sm text-neutral-400">
                          We've received your information and will contact you shortly.
                        </p>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input placeholder="your@email.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone</FormLabel>
                                  <FormControl>
                                    <Input placeholder="(555) 123-4567" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="propertyAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Property Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="123 Rural Road, Town, State" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Additional Information</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us more about your property..."
                                    className="resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="w-full bg-primary">
                            Request a Listing Consultation
                          </Button>
                        </form>
                      </Form>
                    )}
                  </CardContent>
                </Card>
                
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-neutral-500 mb-4">
                    The Listing Process
                  </h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">1</div>
                      <div>
                        <p className="font-semibold text-neutral-500">Free Consultation</p>
                        <p className="text-neutral-400 text-sm">We'll evaluate your property and suggest the best listing strategy.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">2</div>
                      <div>
                        <p className="font-semibold text-neutral-500">Prepare & List</p>
                        <p className="text-neutral-400 text-sm">We'll take professional photos and create an attractive listing.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">3</div>
                      <div>
                        <p className="font-semibold text-neutral-500">Market Your Property</p>
                        <p className="text-neutral-400 text-sm">Your property will be promoted to our network of rural property buyers.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">4</div>
                      <div>
                        <p className="font-semibold text-neutral-500">Close the Sale</p>
                        <p className="text-neutral-400 text-sm">We'll handle negotiations and paperwork to ensure a smooth closing.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cash">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-neutral-500 mb-4">
                  Want to Sell Your Property Quickly?
                </h3>
                <p className="text-neutral-400 mb-6">
                  If you're looking for a fast, hassle-free sale of your rural property, 
                  we can provide a fair cash offer with no obligation.
                </p>
                <Link href="/we-buy-houses">
                  <Button size="lg" className="bg-secondary hover:bg-opacity-90">
                    Get a Cash Offer
                  </Button>
                </Link>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                  <div className="p-4 bg-neutral-100 rounded-lg">
                    <div className="text-secondary text-3xl mb-2">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <h4 className="font-semibold mb-1">Close Quickly</h4>
                    <p className="text-sm text-neutral-400">As fast as 7-10 days</p>
                  </div>
                  <div className="p-4 bg-neutral-100 rounded-lg">
                    <div className="text-secondary text-3xl mb-2">
                      <i className="fas fa-tools"></i>
                    </div>
                    <h4 className="font-semibold mb-1">No Repairs</h4>
                    <p className="text-sm text-neutral-400">Sell as-is, no fixes needed</p>
                  </div>
                  <div className="p-4 bg-neutral-100 rounded-lg">
                    <div className="text-secondary text-3xl mb-2">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <h4 className="font-semibold mb-1">No Fees</h4>
                    <p className="text-sm text-neutral-400">No commissions or closing costs</p>
                  </div>
                  <div className="p-4 bg-neutral-100 rounded-lg">
                    <div className="text-secondary text-3xl mb-2">
                      <i className="fas fa-file-contract"></i>
                    </div>
                    <h4 className="font-semibold mb-1">Simple Process</h4>
                    <p className="text-sm text-neutral-400">Hassle-free paperwork</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-10 md:py-16 bg-neutral-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-8 text-center">
            What Our Sellers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                "Selling our rural property was easier than we expected. We got a fair price and the team was very professional."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3 flex items-center justify-center">
                  <i className="fas fa-user text-neutral-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-neutral-500">Michael R.</p>
                  <p className="text-sm text-neutral-400">Sold in Oak Valley</p>
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
                "I needed to sell my family farmhouse quickly and RuralHomes gave me a fair cash offer. The process was straightforward and fast."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3 flex items-center justify-center">
                  <i className="fas fa-user text-neutral-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-neutral-500">Patricia L.</p>
                  <p className="text-sm text-neutral-400">Cash sale in Meadowbrook</p>
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
                "My rural property was listed for months with another agency with no success. RuralHomes found a buyer within weeks. Their rural property expertise made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3 flex items-center justify-center">
                  <i className="fas fa-user text-neutral-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-neutral-500">James & Susan T.</p>
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
