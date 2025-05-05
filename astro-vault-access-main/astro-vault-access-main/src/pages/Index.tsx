
import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

const Index = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="min-h-screen flex flex-col bg-astro-dark">
      {/* Hero section with stars background */}
      <div className="relative flex flex-1 flex-col items-center justify-center p-4">
        {/* Background with stars */}
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1600')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-astro-dark/80 via-background/80 to-astro-dark/90"></div>
        
        {/* Content */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 p-4">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-fade-in">
              <span className="text-gradient">Astro Vault</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md md:max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Seu portal para o universo de conhecimento astronômico. Acesse seus cursos e produtos sobre astronomia em um só lugar, com a experiência de navegação mais imersiva do mercado.
            </p>
          </div>
          <div className="w-full md:w-auto">
            {isLoginForm ? (
              <LoginForm onToggleForm={toggleForm} />
            ) : (
              <RegisterForm onToggleForm={toggleForm} />
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 border-t border-border/40 bg-astro-dark/80 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Astro Vault. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
