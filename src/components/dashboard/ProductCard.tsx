
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  accessUrl: string;
  rating?: number;
  progress?: number;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-card-glow"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="aspect-video relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.title}
          className={`object-cover w-full h-full transition-transform duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
        
        {product.rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/60 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        )}
        
        {product.progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div 
              className="h-full bg-astro-highlight"
              style={{ width: `${product.progress}%` }}
            />
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button 
          className="w-full bg-astro-primary hover:bg-astro-accent transition-all group" 
          asChild
        >
          <a href={`/dashboard/product/${product.id}`} className="flex items-center justify-center gap-2">
            Acessar
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
