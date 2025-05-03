import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center text-secondary">
      {Array(fullStars).fill(0).map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
      {Array(emptyStars).fill(0).map((_, i) => (
        <i key={`empty-${i}`} className="far fa-star"></i>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const renderSkeletons = () => {
    return Array(3).fill(0).map((_, index) => (
      <Card key={index} className="bg-neutral-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-16 w-full mb-4" />
          <div className="flex items-center">
            <Skeleton className="w-10 h-10 rounded-full mr-3" />
            <div>
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-36" />
            </div>
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-8 text-center">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            renderSkeletons()
          ) : testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-neutral-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-neutral-500 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neutral-300 rounded-full mr-3 flex items-center justify-center">
                      <i className="fas fa-user text-neutral-400"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-500">{testimonial.name}</p>
                      <p className="text-sm text-neutral-400">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center p-8">
              <p className="text-neutral-400">No testimonials available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
