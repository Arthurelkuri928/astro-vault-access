
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/dashboard/Header";
import { ProductGrid } from "@/components/dashboard/ProductGrid";
import { Search } from "lucide-react";

const Products = () => {
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
        <section className="py-12 sm:py-16">
          <div className="container">
            {/* Page header with search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 fade-in">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-gradient">Meus Produtos</h1>
                <p className="text-muted-foreground mb-2">Acesse todos os seus cursos e produtos disponíveis</p>
              </div>
              
              {/* Search bar */}
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Buscar produtos..." 
                  className="w-full bg-muted/30 border border-border/40 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-astro-primary/20 transition-all"
                />
              </div>
            </div>
            
            {/* Filter tabs */}
            <div className="flex gap-4 mb-10 overflow-x-auto pb-2 fade-in" style={{ animationDelay: "0.1s" }}>
              <button className="bg-astro-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap">
                Todos
              </button>
              <button className="bg-muted/30 hover:bg-muted/50 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors">
                Em progresso
              </button>
              <button className="bg-muted/30 hover:bg-muted/50 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors">
                Concluídos
              </button>
              <button className="bg-muted/30 hover:bg-muted/50 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors">
                Novos
              </button>
            </div>
            
            {/* Products grid */}
            <ProductGrid />
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

export default Products;
