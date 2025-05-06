import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Redirect, useLocation } from "wouter";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, FileText, Home, Loader2, Upload } from "lucide-react";

// Form validation schema
const applicationFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  currentAddress: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().length(2, "Please use 2-letter state code"),
  zipCode: z.string().regex(/^\d{5}$/, "ZIP code must be 5 digits"),
  moveInDate: z.date().optional(),
  monthlyIncome: z.preprocess(
    (val) => (val === "" ? 0 : Number(val)),
    z.number().min(0, "Income must be a positive number")
  ),
  occupation: z.string().min(2, "Occupation must be at least 2 characters"),
  employer: z.string().optional(),
  employmentLength: z.string().optional(),
  creditScore: z.preprocess(
    (val) => (val === "" ? null : Number(val)),
    z.number().min(300, "Credit score must be at least 300").max(850, "Credit score must be at most 850").nullable().optional()
  ),
  hasBeenEvicted: z.boolean().default(false),
  hasPets: z.boolean().default(false),
  petDetails: z.string().optional(),
  additionalOccupants: z.preprocess(
    (val) => (val === "" ? 0 : Number(val)),
    z.number().min(0, "Must be a positive number")
  ),
  rentalHistory: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

// Upload document form
const documentFormSchema = z.object({
  documentType: z.string().min(1, "Document type is required"),
  documentUrl: z.string().url("Please enter a valid URL"),
  fileName: z.string().min(1, "File name is required"),
  fileSize: z.number().positive("File size must be positive"),
});

type DocumentFormValues = z.infer<typeof documentFormSchema>;

export default function RentalApplication() {
  const [activeTab, setActiveTab] = useState("application");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user, isAuthenticated, isLoading } = useAuth();
  const queryClient = useQueryClient();

  // Fetch existing application if available
  const {
    data: application,
    isLoading: isLoadingApplication,
  } = useQuery({
    queryKey: ["/api/rental-applications/my-application"],
    enabled: isAuthenticated,
  });

  // Fetch application submissions (properties applied to)
  const {
    data: submissions,
    isLoading: isLoadingSubmissions,
  } = useQuery({
    queryKey: ["/api/rental-applications/my-submissions"],
    enabled: isAuthenticated && !!application,
  });

  // Application form
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentAddress: "",
      city: "",
      state: "",
      zipCode: "",
      monthlyIncome: 0,
      occupation: "",
      employer: "",
      employmentLength: "",
      creditScore: null,
      hasBeenEvicted: false,
      hasPets: false,
      petDetails: "",
      additionalOccupants: 0,
      rentalHistory: "",
      additionalNotes: "",
    },
  });

  // Fill form with existing application data when available
  useEffect(() => {
    if (application) {
      // Reset form with application data
      form.reset({
        firstName: application.firstName,
        lastName: application.lastName,
        email: application.email,
        phone: application.phone,
        currentAddress: application.currentAddress,
        city: application.city,
        state: application.state,
        zipCode: application.zipCode,
        moveInDate: application.moveInDate ? new Date(application.moveInDate) : undefined,
        monthlyIncome: application.monthlyIncome,
        occupation: application.occupation,
        employer: application.employer || "",
        employmentLength: application.employmentLength || "",
        creditScore: application.creditScore || null,
        hasBeenEvicted: application.hasBeenEvicted,
        hasPets: application.hasPets,
        petDetails: application.petDetails || "",
        additionalOccupants: application.additionalOccupants,
        rentalHistory: application.rentalHistory || "",
        additionalNotes: application.additionalNotes || "",
      });
    }
  }, [application, form]);

  // Create/update application mutation
  const applicationMutation = useMutation({
    mutationFn: async (data: ApplicationFormValues) => {
      const res = await apiRequest("POST", "/api/rental-applications", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Application saved",
        description: "Your rental application has been saved successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/rental-applications/my-application"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error saving application",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Upload document mutation
  const documentMutation = useMutation({
    mutationFn: async (data: DocumentFormValues) => {
      const res = await apiRequest(
        "POST", 
        `/api/rental-applications/${application?.id}/documents`, 
        data
      );
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Document uploaded",
        description: "Your document has been uploaded successfully.",
      });
      queryClient.invalidateQueries({ 
        queryKey: [`/api/rental-applications/${application?.id}/documents`] 
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error uploading document",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Fetch documents for this application
  const {
    data: documents,
    isLoading: isLoadingDocuments,
  } = useQuery({
    queryKey: [`/api/rental-applications/${application?.id}/documents`],
    enabled: isAuthenticated && !!application?.id,
  });

  // Form submission handler
  const onSubmit = (data: ApplicationFormValues) => {
    applicationMutation.mutate(data);
  };

  // Redirect if not authenticated
  if (!isLoading && !isAuthenticated) {
    return <Redirect to="/auth" />;
  }

  // Loading state
  if (isLoading || isLoadingApplication) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Rental Application</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="application">
            Application Details
          </TabsTrigger>
          <TabsTrigger value="documents" disabled={!application}>
            Documents
          </TabsTrigger>
          <TabsTrigger value="submissions" disabled={!application}>
            My Applications
          </TabsTrigger>
        </TabsList>

        {/* Application Form Tab */}
        <TabsContent value="application">
          <Card>
            <CardHeader>
              <CardTitle>Rental Application Form</CardTitle>
              <CardDescription>
                Complete your rental application to apply for properties. Your information will be verified.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        {...form.register("firstName")}
                        placeholder="John"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        {...form.register("lastName")}
                        placeholder="Doe"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        placeholder="john.doe@example.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        {...form.register("phone")}
                        placeholder="1234567890"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Current Address</h3>
                  <div className="space-y-2">
                    <Label htmlFor="currentAddress">Street Address</Label>
                    <Input
                      id="currentAddress"
                      {...form.register("currentAddress")}
                      placeholder="123 Main St"
                    />
                    {form.formState.errors.currentAddress && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.currentAddress.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        {...form.register("city")}
                        placeholder="Anytown"
                      />
                      {form.formState.errors.city && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.city.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        {...form.register("state")}
                        placeholder="CA"
                        maxLength={2}
                      />
                      {form.formState.errors.state && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.state.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        {...form.register("zipCode")}
                        placeholder="12345"
                      />
                      {form.formState.errors.zipCode && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.zipCode.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Employment & Income</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        {...form.register("occupation")}
                        placeholder="Software Developer"
                      />
                      {form.formState.errors.occupation && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.occupation.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="monthlyIncome">Monthly Income ($)</Label>
                      <Input
                        id="monthlyIncome"
                        type="number"
                        {...form.register("monthlyIncome")}
                        placeholder="5000"
                      />
                      {form.formState.errors.monthlyIncome && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.monthlyIncome.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employer">Current Employer</Label>
                      <Input
                        id="employer"
                        {...form.register("employer")}
                        placeholder="ACME Inc."
                      />
                      {form.formState.errors.employer && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.employer.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employmentLength">Length of Employment</Label>
                      <Input
                        id="employmentLength"
                        {...form.register("employmentLength")}
                        placeholder="2 years"
                      />
                      {form.formState.errors.employmentLength && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.employmentLength.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Additional Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="creditScore">Credit Score (optional)</Label>
                      <Input
                        id="creditScore"
                        type="number"
                        {...form.register("creditScore")}
                        placeholder="720"
                      />
                      {form.formState.errors.creditScore && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.creditScore.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {form.watch("moveInDate") ? (
                              format(form.watch("moveInDate"), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={form.watch("moveInDate")}
                            onSelect={(date) => form.setValue("moveInDate", date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasBeenEvicted"
                          checked={form.watch("hasBeenEvicted")}
                          onCheckedChange={(checked) => 
                            form.setValue("hasBeenEvicted", checked as boolean)
                          }
                        />
                        <Label htmlFor="hasBeenEvicted" className="font-normal">
                          Have you ever been evicted?
                        </Label>
                      </div>
                      {form.formState.errors.hasBeenEvicted && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.hasBeenEvicted.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasPets"
                          checked={form.watch("hasPets")}
                          onCheckedChange={(checked) => 
                            form.setValue("hasPets", checked as boolean)
                          }
                        />
                        <Label htmlFor="hasPets" className="font-normal">
                          Do you have pets?
                        </Label>
                      </div>
                      {form.formState.errors.hasPets && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.hasPets.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {form.watch("hasPets") && (
                    <div className="space-y-2">
                      <Label htmlFor="petDetails">Pet Details</Label>
                      <Textarea
                        id="petDetails"
                        {...form.register("petDetails")}
                        placeholder="Type, breed, age, size of pets"
                        rows={3}
                      />
                      {form.formState.errors.petDetails && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.petDetails.message}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="additionalOccupants">Number of Additional Occupants</Label>
                    <Input
                      id="additionalOccupants"
                      type="number"
                      min="0"
                      {...form.register("additionalOccupants")}
                      placeholder="0"
                    />
                    {form.formState.errors.additionalOccupants && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.additionalOccupants.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rentalHistory">Rental History</Label>
                    <Textarea
                      id="rentalHistory"
                      {...form.register("rentalHistory")}
                      placeholder="Brief description of your rental history"
                      rows={3}
                    />
                    {form.formState.errors.rentalHistory && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.rentalHistory.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      {...form.register("additionalNotes")}
                      placeholder="Any additional information you'd like to provide"
                      rows={3}
                    />
                    {form.formState.errors.additionalNotes && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.additionalNotes.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={applicationMutation.isPending}
                >
                  {applicationMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Application Documents</CardTitle>
              <CardDescription>
                Upload required documents for your rental application. These may include identification, 
                proof of income, and references.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Document list */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Your Documents</h3>
                  
                  {isLoadingDocuments ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : documents && documents.length > 0 ? (
                    <div className="grid gap-4">
                      {documents.map((doc: any) => (
                        <Card key={doc.id} className="overflow-hidden">
                          <div className="flex items-center p-4">
                            <FileText className="h-8 w-8 mr-4 text-primary" />
                            <div className="flex-1">
                              <h4 className="font-medium">{doc.documentType}</h4>
                              <p className="text-sm text-muted-foreground">{doc.fileName}</p>
                            </div>
                            <div className="ml-auto flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(doc.documentUrl, '_blank')}
                              >
                                View
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-muted rounded-lg p-8 text-center">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h4 className="text-lg font-medium mb-2">No documents yet</h4>
                      <p className="text-muted-foreground mb-4">
                        You haven't uploaded any documents for your application.
                      </p>
                    </div>
                  )}
                </div>

                {/* Upload form */}
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Upload New Document</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="documentType">Document Type</Label>
                      <Select 
                        onValueChange={(value) => {
                          // This would be handled by a document form if implemented
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="identification">Identification (ID/Driver's License)</SelectItem>
                          <SelectItem value="income_proof">Proof of Income</SelectItem>
                          <SelectItem value="employment_verification">Employment Verification</SelectItem>
                          <SelectItem value="reference_letter">Reference Letter</SelectItem>
                          <SelectItem value="bank_statement">Bank Statement</SelectItem>
                          <SelectItem value="other">Other Document</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="p-8 border-2 border-dashed rounded-lg text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm mb-1">Drag and drop your file here, or click to browse</p>
                      <p className="text-xs text-muted-foreground mb-4">Supports PDF, JPEG, and PNG files up to 5MB</p>
                      <Button size="sm" variant="outline">
                        Browse Files
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      Note: File upload functionality is a placeholder. In a real implementation, 
                      this would connect to a file storage service like AWS S3.
                    </p>

                    <Button disabled className="w-full">
                      Upload Document
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Applications Tab */}
        <TabsContent value="submissions">
          <Card>
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
              <CardDescription>
                Properties you've applied to and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingSubmissions ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : submissions && submissions.length > 0 ? (
                <div className="grid gap-4">
                  {submissions.map((submission: any) => (
                    <Card key={submission.id} className="overflow-hidden">
                      <div className="md:flex">
                        <div className="bg-muted md:w-1/3 h-48 md:h-auto">
                          {submission.property.images && submission.property.images.length > 0 ? (
                            <img 
                              src={submission.property.images[0].url} 
                              alt={submission.property.title} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-muted">
                              <Home className="h-12 w-12 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="p-4 md:w-2/3">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">{submission.property.title}</h3>
                            <Badge
                              variant={
                                submission.status === "approved" ? "success" :
                                submission.status === "rejected" ? "destructive" :
                                submission.status === "withdrawn" ? "outline" :
                                "secondary"
                              }
                            >
                              {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {submission.property.address}, {submission.property.city}, {submission.property.state}
                          </p>
                          <p className="text-sm mb-4">${submission.property.price.toLocaleString()}/month</p>
                          
                          <div className="text-sm mb-2">
                            <strong>Applied on:</strong> {new Date(submission.createdAt).toLocaleDateString()}
                          </div>
                          
                          {submission.message && (
                            <div className="text-sm">
                              <strong>Your message:</strong> {submission.message}
                            </div>
                          )}
                          
                          {submission.reviewedAt && (
                            <div className="text-sm mt-2">
                              <strong>Reviewed on:</strong> {new Date(submission.reviewedAt).toLocaleDateString()}
                            </div>
                          )}
                          
                          <div className="mt-4 flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setLocation(`/properties/${submission.property.id}`)}
                            >
                              View Property
                            </Button>
                            
                            {submission.status === "pending" && (
                              <Button
                                size="sm"
                                variant="destructive"
                              >
                                Withdraw Application
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-muted rounded-lg p-8 text-center">
                  <Home className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h4 className="text-lg font-medium mb-2">No applications yet</h4>
                  <p className="text-muted-foreground mb-4">
                    You haven't applied to any properties yet. Browse our rental listings to find your next home.
                  </p>
                  <Button onClick={() => setLocation("/rent")}>
                    Browse Rentals
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}