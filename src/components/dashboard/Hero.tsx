
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";

interface HeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export function Hero({
  title = "Bem-vindo à Astro Vault",
  description = "O portal de acesso aos melhores cursos e produtos sobre astronomia e exploração espacial.",
  buttonText = "Explorar produtos",
  buttonUrl = "/dashboard/products"
}: HeroProps) {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden">
      {/* Animated stars background */}
      <div className="stars-container absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index} 
            className="star absolute bg-white rounded-full animate-pulse-fade"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1600')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-astro-gradient opacity-80">
        <div className="absolute inset-0 bg-astro-glow animate-pulse-fade" style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Floating decorative element */}
          <div className="mb-6 animate-float">
            <Star className="h-10 w-10 text-astro-highlight opacity-80" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">{title}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl slide-up" style={{ animationDelay: "0.3s" }}>
            {description}
          </p>
          
          <Button 
            size="lg" 
            className="bg-astro-primary hover:bg-astro-accent scale-in shadow-astro hover:shadow-astro-hover group" 
            style={{ animationDelay: "0.5s" }}
            asChild
          >
            <a href={buttonUrl} className="flex items-center gap-2">
              {buttonText}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          {/* Decorative orbit element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-astro-accent/10 rounded-full opacity-20 -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-astro-accent/5 rounded-full opacity-20 -z-10"></div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
        clipPath: 'ellipse(70% 50% at 50% 100%)'
      }}></div>
    </section>
  );
}
