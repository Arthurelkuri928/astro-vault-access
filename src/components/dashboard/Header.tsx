
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, LogOut, Home, Box, LifeBuoy, Menu, X } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const userString = localStorage.getItem("astroUser");
  const user = userString ? JSON.parse(userString) : null;
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("astroUser");
    toast.success("Logout realizado com sucesso!");
    navigate("/");
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navLinks = [
    { label: "Home", icon: <Home className="h-4 w-4" />, url: "/dashboard" },
    { label: "Meus Produtos", icon: <Box className="h-4 w-4" />, url: "/dashboard/products" },
    { label: "Suporte", icon: <LifeBuoy className="h-4 w-4" />, url: "/dashboard/support" }
  ];
  
  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md' 
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 items-center">
          <a href="/dashboard" className="flex items-center space-x-2 relative overflow-hidden group">
            {/* Logo or brand name */}
            <div className="absolute -inset-1 rounded-full blur-md bg-astro-highlight/20 group-hover:bg-astro-highlight/30 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <span className="text-2xl font-bold text-gradient relative">Astro Vault</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                className="text-sm font-medium flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-astro-highlight transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-astro-highlight after:transition-all after:duration-300"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
        
        {/* User area and logout */}
        <div className="flex items-center gap-4">
          {/* User info - Desktop */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full">
            <div className="size-8 rounded-full bg-astro-primary/10 flex items-center justify-center text-astro-primary">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm text-foreground/80">{user?.email || "Usuário"}</span>
          </div>
          
          {/* Logout button - Desktop */}
          <Button 
            variant="ghost" 
            className="text-sm hover:bg-destructive/10 hover:text-destructive hidden md:flex items-center gap-2 rounded-full"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-muted/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
            
            {/* Mobile user info */}
            <div className="border-t border-border/40 mt-2 pt-4">
              <div className="flex items-center gap-3 py-2.5 px-4 rounded-lg mb-2">
                <div className="size-8 rounded-full bg-astro-primary/10 flex items-center justify-center text-astro-primary">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm">{user?.email || "Usuário"}</span>
              </div>
              
              {/* Mobile logout button */}
              <Button 
                variant="ghost" 
                className="w-full justify-start text-sm hover:bg-destructive/10 hover:text-destructive flex items-center gap-3"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
