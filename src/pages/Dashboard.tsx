
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/dashboard/Header";
import { Hero } from "@/components/dashboard/Hero";
import { ProductGrid } from "@/components/dashboard/ProductGrid";
import { ChevronRight } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("astroUser");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="py-12 sm:py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8 fade-in">
              <h2 className="text-3xl font-bold text-gradient">Seus Produtos</h2>
              <a 
                href="/dashboard/products" 
                className="text-sm text-astro-highlight flex items-center gap-2 hover:underline underline-offset-4"
              >
                Ver todos 
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <ProductGrid />
          </div>
        </section>
        
        {/* Featured content section */}
        <section className="py-12 sm:py-16 bg-muted/30 curved-section">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center slide-up">Explore Mais Conteúdo</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* First feature card */}
              <div className="bg-card border border-border/40 rounded-xl p-6 backdrop-blur-sm hover-glow slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="size-14 rounded-full bg-astro-primary/10 mb-4 flex items-center justify-center">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary to-astro-accent flex items-center justify-center">
                    <span className="font-bold text-lg">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Acesso Irrestrito</h3>
                <p className="text-muted-foreground text-sm">
                  Acesse todos os seus cursos e materiais complementares de qualquer dispositivo, a qualquer momento.
                </p>
              </div>
              
              {/* Second feature card */}
              <div className="bg-card border border-border/40 rounded-xl p-6 backdrop-blur-sm hover-glow slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="size-14 rounded-full bg-astro-primary/10 mb-4 flex items-center justify-center">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary to-astro-accent flex items-center justify-center">
                    <span className="font-bold text-lg">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Conteúdo Premium</h3>
                <p className="text-muted-foreground text-sm">
                  Materiais exclusivos desenvolvidos por especialistas em astronomia e astrofísica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 border-t border-border/40 bg-background backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-center md:text-left font-semibold text-gradient mb-1">
              Astro Vault
            </p>
            <p className="text-center text-xs text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-astro-highlight transition-colors">Termos</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-astro-highlight transition-colors">Privacidade</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-astro-highlight transition-colors">Ajuda</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
