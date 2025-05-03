import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
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
import { Button } from "@/components/ui/button";

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
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-neutral-200 rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-4">
                We Buy Rural Houses
              </h2>
              <p className="text-neutral-400 mb-6">
                Looking to sell your country home quickly? We provide fair cash offers for rural properties of all types.
              </p>
              <ul className="space-y-2 mb-6">
                {CASH_OFFER_BENEFITS.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check text-status-available mt-1 mr-2"></i>
                    <span className="text-neutral-400">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              {isSubmitted ? (
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-status-available text-5xl mb-4">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-500 mb-2">
                    Thanks for Your Submission!
                  </h3>
                  <p className="text-neutral-400 mb-4">
                    We've received your request for a cash offer. One of our representatives will contact you within 24 hours to discuss your property and provide a fair cash offer.
                  </p>
                  <p className="text-neutral-400">
                    Have questions? Call us at (555) 123-4567
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-neutral-500 mb-4">
                      Get a Cash Offer
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="propertyAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-neutral-400 text-sm mb-1">Property Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your property address"
                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="block text-neutral-400 text-sm mb-1">Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                  {...field}
                                />
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
                              <FormLabel className="block text-neutral-400 text-sm mb-1">Phone</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your phone number"
                                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-neutral-400 text-sm mb-1">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-secondary hover:bg-opacity-90 text-white py-3 rounded-lg font-semibold"
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
                        By submitting, you agree to our <a href="#" className="underline">Terms of Service</a>
                      </p>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
