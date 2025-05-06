import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { Property } from "@shared/schema";

// Application message form schema
const applicationMessageSchema = z.object({
  message: z.string().max(500, "Message must be 500 characters or less").optional(),
});

type ApplicationMessageFormValues = z.infer<typeof applicationMessageSchema>;

interface ApplyRentalButtonProps {
  property: Property;
}

export default function ApplyRentalButton({ property }: ApplyRentalButtonProps) {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  // Get user's application
  const { 
    data: application, 
    isLoading: isLoadingApplication,
  } = useQuery({
    queryKey: ["/api/rental-applications/my-application"],
    enabled: isAuthenticated && open,
  });

  // Check if already applied
  const {
    data: submissions,
    isLoading: isLoadingSubmissions,
  } = useQuery({
    queryKey: ["/api/rental-applications/my-submissions"],
    enabled: isAuthenticated && open && !!application,
  });

  const alreadyApplied = submissions?.some(
    (submission: any) => submission.property.id === property.id
  );

  // Form for application message
  const form = useForm<ApplicationMessageFormValues>({
    resolver: zodResolver(applicationMessageSchema),
    defaultValues: {
      message: "",
    },
  });

  // Submit application mutation
  const submitMutation = useMutation({
    mutationFn: async (data: ApplicationMessageFormValues) => {
      const res = await apiRequest(
        "POST", 
        `/api/rental-applications/${application?.id}/submit`, 
        {
          propertyId: property.id,
          message: data.message || "",
        }
      );
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Application submitted",
        description: "Your application has been submitted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/rental-applications/my-submissions"] });
      setOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Error submitting application",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ApplicationMessageFormValues) => {
    submitMutation.mutate(data);
  };

  if (!property.isRental) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Apply for this Rental</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Apply for this Rental</DialogTitle>
          <DialogDescription>
            Submit your rental application for {property.title}
          </DialogDescription>
        </DialogHeader>

        {!isAuthenticated ? (
          <div className="py-6">
            <p className="mb-4">
              You need to be logged in to apply for rentals.
            </p>
            <Button 
              onClick={() => setLocation("/auth")}
              className="w-full"
            >
              Sign In or Register
            </Button>
          </div>
        ) : isLoadingApplication || isLoadingSubmissions ? (
          <div className="py-10 flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : !application ? (
          <div className="py-6">
            <p className="mb-4">
              You need to complete your rental application before applying to properties.
            </p>
            <Button 
              onClick={() => setLocation("/rental-application")}
              className="w-full"
            >
              Create Rental Application
            </Button>
          </div>
        ) : alreadyApplied ? (
          <div className="py-6">
            <p className="mb-4">
              You've already applied to this property. You can view your application status in your dashboard.
            </p>
            <Button 
              onClick={() => setLocation("/rental-application")}
              className="w-full"
            >
              View My Applications
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Add a message to your application"
                        {...field}
                        rows={4}
                      />
                    </FormControl>
                    <FormDescription>
                      Include any additional information relevant to your application.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="gap-2 sm:gap-0">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button 
                  type="submit"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}