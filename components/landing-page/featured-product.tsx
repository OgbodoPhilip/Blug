import { ArrowRight, StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import Link from "next/link";
import { BorderBeam } from "../ui/border-beam";
import ProductCard from "../products/product-card";


const FeaturedProducts = [
  {
    id: 1,
    name: "Innovative Gadget",
    description:
      "Experience the absolute future with our latest innovative gadget that combines cutting-edge technology with sleek design.",
    tags: ["Tech", "Gadget"],
    votes: 250,
    isFeatured: true,
  },
];

export default async function FeaturedProduct() {

  return (
    <section className="py-12 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8 ">
          <SectionHeader title="Featured Today"  Icon={StarIcon} description="Discover the latest projects and innovations."/>
          <Button variant="outline" asChild className="rounded-2xl hidden sm:flex"><Link href="/explore">View All<ArrowRight className="size-4 "/></Link>
         
          </Button>

        </div>
        {/* <div className="grid-wrapper">
         
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/one.jpg"
              alt="Featured Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Innovative Gadget</h3>
              <p className="text-muted-foreground mb-4">
                Experience the future with our latest innovative gadget that
                combines cutting-edge technology with sleek design.
              </p>
              <Button asChild size="lg" className="rounded-2xl">
                <Link href="/product/innovative-gadget">
                  Learn More
                  <ArrowRight size="lg" />
                </Link>
              </Button>
            </div>
          </div>
       
        </div> */}
        <div className="grid-wrapper">
          {
            FeaturedProducts.map((product)=>(
              <ProductCard key={product.id} product={product}
            />
            ))
             
          }
            
        </div>
      </div>
    </section>
  )
}