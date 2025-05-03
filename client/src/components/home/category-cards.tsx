import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CategoryCard {
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkUrl: string;
}

const categories: CategoryCard[] = [
  {
    title: "Buy a home",
    description: "Find your place in the country with an immersive photo experience and detailed listings",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    linkText: "Browse homes",
    linkUrl: "/buy"
  },
  {
    title: "Sell a home",
    description: "List your rural property and reach potential buyers across the country",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    linkText: "See your options",
    linkUrl: "/sell"
  },
  {
    title: "Rent a home",
    description: "Find rental properties in rural areas, from cabins to farmhouses",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    linkText: "Find rentals",
    linkUrl: "/rent"
  }
];

export default function CategoryCards() {
  return (
    <section className="py-10 md:py-16 bg-neutral-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-500 mb-8 text-center">
          What are you looking for?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition-all p-6 text-center">
              <div className="h-40 flex items-center justify-center mb-4">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="max-h-full rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-500 mb-2">{category.title}</h3>
              <p className="text-neutral-400 mb-6">
                {category.description}
              </p>
              <Link href={category.linkUrl}>
                <Button 
                  variant="outline" 
                  className="inline-block px-6 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  {category.linkText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
