import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { PropertyImage } from "@shared/schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2, ImagePlus, X } from "lucide-react";

const imageFormSchema = z.object({
  imageUrl: z.string().url("Please enter a valid image URL"),
  caption: z.string().optional(),
  displayOrder: z.coerce.number().int().default(0),
});

type ImageFormData = z.infer<typeof imageFormSchema>;

interface ImageUploadProps {
  propertyId: number;
}

export default function ImageUpload({ propertyId }: ImageUploadProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAddImageOpen, setIsAddImageOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<PropertyImage | null>(null);
  
  const form = useForm<ImageFormData>({
    resolver: zodResolver(imageFormSchema),
    defaultValues: {
      imageUrl: "",
      caption: "",
      displayOrder: 0
    },
  });
  
  const { data: images, isLoading } = useQuery<PropertyImage[]>({
    queryKey: [`/api/properties/${propertyId}/images`],
  });
  
  const addImageMutation = useMutation({
    mutationFn: async (data: ImageFormData) => {
      await apiRequest("POST", `/api/properties/${propertyId}/images`, {
        ...data,
        propertyId
      });
    },
    onSuccess: () => {
      toast({
        title: "Image added",
        description: "The image has been successfully added",
      });
      queryClient.invalidateQueries({ queryKey: [`/api/properties/${propertyId}/images`] });
      queryClient.invalidateQueries({ queryKey: [`/api/properties/${propertyId}`] });
      setIsAddImageOpen(false);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add image",
        variant: "destructive",
      });
    },
  });
  
  const deleteImageMutation = useMutation({
    mutationFn: async (imageId: number) => {
      await apiRequest("DELETE", `/api/property-images/${imageId}`);
    },
    onSuccess: () => {
      toast({
        title: "Image deleted",
        description: "The image has been successfully deleted",
      });
      queryClient.invalidateQueries({ queryKey: [`/api/properties/${propertyId}/images`] });
      queryClient.invalidateQueries({ queryKey: [`/api/properties/${propertyId}`] });
      setImageToDelete(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete image",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: ImageFormData) => {
    addImageMutation.mutate(data);
  };
  
  const handleDeleteImage = () => {
    if (imageToDelete) {
      deleteImageMutation.mutate(imageToDelete.id);
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Property Images</h3>
        <Dialog open={isAddImageOpen} onOpenChange={setIsAddImageOpen}>
          <DialogTrigger asChild>
            <Button>
              <ImagePlus className="mr-2 h-4 w-4" />
              Add Image
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Property Image</DialogTitle>
              <DialogDescription>
                Enter the URL and caption for the property image
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="caption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Caption (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Image description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="displayOrder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display Order</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value === "" ? "0" : e.target.value;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button 
                    type="submit"
                    disabled={addImageMutation.isPending}
                  >
                    {addImageMutation.isPending ? (
                      <>
                        <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Adding...
                      </>
                    ) : (
                      "Add Image"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array(3).fill(0).map((_, i) => (
            <Card key={i}>
              <Skeleton className="w-full h-40" />
              <CardContent className="p-4">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : images && images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src={image.imageUrl} 
                  alt={image.caption || "Property image"} 
                  className="w-full h-full object-cover"
                />
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="absolute top-2 right-2" 
                  onClick={() => setImageToDelete(image)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-neutral-400">{image.caption || "No caption"}</p>
                <p className="text-xs text-neutral-400 mt-1">Order: {image.displayOrder}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 bg-neutral-100 rounded-lg">
          <div className="text-4xl text-neutral-300 mb-3">
            <i className="fas fa-images"></i>
          </div>
          <p className="text-neutral-500 mb-4">No images added yet</p>
          <Button
            variant="outline"
            onClick={() => setIsAddImageOpen(true)}
          >
            Add Your First Image
          </Button>
        </div>
      )}
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={!!imageToDelete} onOpenChange={(open) => !open && setImageToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this image? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {imageToDelete && (
            <div className="my-4 flex justify-center">
              <img 
                src={imageToDelete.imageUrl} 
                alt={imageToDelete.caption || "Property image"} 
                className="max-h-[200px] object-contain rounded-md"
              />
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button 
              variant="destructive" 
              onClick={handleDeleteImage}
              disabled={deleteImageMutation.isPending}
            >
              {deleteImageMutation.isPending ? (
                <>
                  <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Deleting...
                </>
              ) : (
                "Delete Image"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
