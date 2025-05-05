
import { ProductCard, Product } from "./ProductCard";

// Sample products data with added ratings and progress
export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Cosmos Masterclass",
    description: "Curso completo sobre astronomia e exploração espacial",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    accessUrl: "/dashboard/product/1",
    rating: 4.8,
    progress: 78,
  },
  {
    id: "2",
    title: "Astrofotografia Pro",
    description: "Aprenda a fotografar o céu noturno como um profissional",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800",
    accessUrl: "/dashboard/product/2",
    rating: 4.6,
    progress: 45,
  },
  {
    id: "3",
    title: "Nebulosas & Galáxias",
    description: "Guia completo sobre os objetos mais fascinantes do universo",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800", 
    accessUrl: "/dashboard/product/3",
    rating: 4.9,
    progress: 23,
  },
  {
    id: "4",
    title: "Telescópios & Equipamentos",
    description: "Tudo sobre escolha e uso de equipamentos astronômicos",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    accessUrl: "/dashboard/product/4",
    rating: 4.7,
    progress: 12,
  },
];

interface ProductGridProps {
  products?: Product[];
}

export function ProductGrid({ products = mockProducts }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className="scale-in" 
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          <ProductCard product={product} index={index} />
        </div>
      ))}
    </div>
  );
}
