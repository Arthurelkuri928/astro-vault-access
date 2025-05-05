
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/dashboard/Header";
import { Hero } from "@/components/dashboard/Hero";
import { ProductGrid } from "@/components/dashboard/ProductGrid";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Seus Produtos</h2>
            <ProductGrid />
          </div>
        </section>
      </main>
      
      <footer className="py-6 border-t border-border/40 bg-background/90 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Astro Vault. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
