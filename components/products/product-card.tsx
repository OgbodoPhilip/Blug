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
        <Card>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                {
                    product.isFeatured && <Badge >
                    Featured
                    </Badge>
                }
                <CardDescription>{product.description}</CardDescription>
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