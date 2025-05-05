
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { toast } from "sonner";

export function Header() {
  const navigate = useNavigate();
  const userString = localStorage.getItem("astroUser");
  const user = userString ? JSON.parse(userString) : null;
  
  const handleLogout = () => {
    localStorage.removeItem("astroUser");
    toast.success("Logout realizado com sucesso!");
    navigate("/");
  };
  
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 items-center">
          <a href="/dashboard" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">Astro Vault</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a 
              href="/dashboard" 
              className="text-sm font-medium transition-colors hover:text-astro-accent"
            >
              Home
            </a>
            <a 
              href="/dashboard/products" 
              className="text-sm font-medium transition-colors hover:text-astro-accent"
            >
              Meus Produtos
            </a>
            <a 
              href="/dashboard/support" 
              className="text-sm font-medium transition-colors hover:text-astro-accent"
            >
              Suporte
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 mr-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{user?.email || "Usuário"}</span>
          </div>
          <Button 
            variant="ghost" 
            className="text-sm hover:bg-muted"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
