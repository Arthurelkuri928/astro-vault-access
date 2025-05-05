
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  accessUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden card-hover border border-border/40 bg-card/80">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-astro-primary hover:bg-astro-accent" asChild>
          <a href={`/dashboard/product/${product.id}`}>Acessar</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
