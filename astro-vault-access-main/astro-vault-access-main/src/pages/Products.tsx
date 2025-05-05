
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/dashboard/Header";
import { ProductGrid } from "@/components/dashboard/ProductGrid";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-2">Meus Produtos</h1>
            <p className="text-muted-foreground mb-8">Acesse todos os seus cursos e produtos disponíveis</p>
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

export default Products;
