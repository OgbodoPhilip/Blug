import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { BorderBeam } from "../ui/border-beam";

interface Product {
    id:number;
    name:string;
    description:string;
    tags:string[];
    votes:number;
    isFeatured:boolean;
}

 
export default function ProductCard({product}:{product:Product}) {
  return (
    <Link href={`/products/${product.id}`} className="relative">
        <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 "> 
            <CardHeader >
                <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
                {
                    product.isFeatured && <Badge >
                   Featured
                    </Badge>
                }
                </div>
               
                 <CardDescription>{product.description}</CardDescription>
                 </div>
                 {/* voting button */}
                 </div> 
               
               
            </CardHeader>
            <CardFooter>
                 <div className="flex items-center gap-2">
                    {product.tags.map((tag)=>(
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                 </div>
            </CardFooter>
       <BorderBeam duration={8} size={100} />
        </Card>
    <BorderBeam duration={8} size={100} />
    </Link>
  )
}