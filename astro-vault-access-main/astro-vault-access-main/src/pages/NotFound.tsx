
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-astro-dark">
      <div className="text-center p-4">
        <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Parece que você se perdeu no espaço...</p>
        <Button className="bg-astro-primary hover:bg-astro-accent" asChild>
          <a href="/">Voltar para Terra</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
