
import { Button } from "@/components/ui/button";

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
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1600')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-fade-in">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {description}
          </p>
          <Button 
            size="lg" 
            className="bg-astro-primary hover:bg-astro-accent animate-scale-in" 
            style={{ animationDelay: "0.4s" }}
            asChild
          >
            <a href={buttonUrl}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
