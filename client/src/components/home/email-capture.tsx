import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

export default function EmailCapture() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const subscription = useMutation({
    mutationFn: async (data: FormData) => {
      await apiRequest("POST", "/api/email-subscriptions", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Subscription successful!",
        description: "You'll now receive updates on new properties.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: FormData) => {
    subscription.mutate(data);
  };
  
  return (
    <section className="bg-primary py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-2">
              Stay Updated on New Rural Properties
            </h2>
            <p className="text-neutral-400">
              Be the first to know when new country homes and land become available
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center text-green-600 p-4">
              <div className="flex justify-center mb-2">
                <i className="fas fa-check-circle text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Thanks for subscribing!</h3>
              <p>We'll keep you updated with the latest rural properties matching your interests.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
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
                  className="bg-secondary hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold"
                  disabled={subscription.isPending}
                >
                  {subscription.isPending ? (
                    <span className="flex items-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i> Subscribing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </Form>
          )}
          
          <p className="text-xs text-neutral-400 mt-3 text-center">
            You can unsubscribe at any time. View our <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
}
