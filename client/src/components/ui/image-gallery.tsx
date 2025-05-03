import { useState } from "react";
import { cn } from "@/lib/utils";
import { PropertyImage } from "@shared/schema";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";

interface ImageGalleryProps {
  images: PropertyImage[];
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className={cn("relative w-full h-48 bg-neutral-300 flex items-center justify-center", className)}>
        <span className="text-neutral-500">No images available</span>
      </div>
    );
  }

  const currentImage = images[currentIndex];
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openFullscreen = () => {
    setFullscreenOpen(true);
  };

  return (
    <>
      <div className={cn("relative w-full", className)}>
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={currentImage.imageUrl} 
            alt={currentImage.caption || "Property image"} 
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute top-3 right-3 rounded-full bg-white/70 text-neutral-500 hover:bg-white"
            onClick={openFullscreen}
            aria-label="View fullscreen"
          >
            <Maximize className="h-4 w-4" />
          </Button>
          
          {images.length > 1 && (
            <>
              <Button 
                variant="secondary" 
                size="icon" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 rounded-full bg-white/70 text-neutral-500 hover:bg-white"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="icon" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full bg-white/70 text-neutral-500 hover:bg-white"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {currentImage.caption && (
          <p className="text-sm text-neutral-400 mt-2">{currentImage.caption}</p>
        )}
      </div>
      
      {/* Fullscreen gallery dialog */}
      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-screen-xl p-0 bg-black/95">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setFullscreenOpen(false)}
            aria-label="Close fullscreen"
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div className="relative h-[80vh] flex items-center justify-center">
            <img 
              src={images[currentIndex].imageUrl} 
              alt={images[currentIndex].caption || "Property image"} 
              className="max-h-full max-w-full object-contain"
            />
            
            {images.length > 1 && (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
          </div>
          
          <div className="p-4 text-center text-white">
            <p>{currentIndex + 1} of {images.length}</p>
            {currentImage.caption && (
              <p className="text-gray-300 mt-1">{currentImage.caption}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
