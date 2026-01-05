import { ArrowRight, StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";

const FeaturedProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=1000&auto=format&fit=crop&q=60",
    name: "Innovative Gadget",
    description: "Experience the absolute future with our latest innovative gadget that combines cutting-edge technology with sleek design.",
    tags: ["Tech", "Gadget"],
    votes: 250,
    isFeatured: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=60",
    name: "Zenith Smart Watch",
    description: "A premium health-focused timepiece that tracks your vitals in real-time while keeping you connected to what matters most.",
    tags: ["Wearables", "Fitness"],
    votes: 412,
    isFeatured: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60",
    name: "Aero-Flow Headphones",
    description: "Immerse yourself in high-fidelity sound with industry-leading noise cancellation and a battery life that spans days.",
    tags: ["Audio", "Lifestyle"],
    votes: 189,
    isFeatured: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542491595-63bd35c89a71?w=1000&auto=format&fit=crop&q=60",
    name: "Lumina Desk Lamp",
    description: "Transform your workspace with an intelligent lighting solution that adjusts color temperature based on your circadian rhythm.",
    tags: ["Home", "Productivity"],
    votes: 324,
    isFeatured: true,
  }
];

export default async function FeaturedProduct() {
  return (
    <section className="py-12 bg-muted/20">
      <div className="wrapper">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <SectionHeader 
            title="Featured Today" 
            Icon={StarIcon} 
            description="Discover the latest projects and innovations."
          />
          <Button variant="outline" asChild className="rounded-2xl hidden sm:flex">
            <Link href="/explore">
              View All <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FeaturedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center sm:hidden">
            <Button variant="outline" asChild className="rounded-2xl w-full">
              <Link href="/explore">
                View All <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}